const express = require('express');
const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, 'data');
const DATA_FILE = path.join(DATA_DIR, 'db.json');
const DB_FILE = path.join(DATA_DIR, 'kalyanam.sqlite');

const defaultDb = {
  users: [
    {
      id: 1,
      firstName: 'கார்த்திக்',
      lastName: 'ராஜேந்திரன்',
      gender: 'Male',
      dob: '1995-03-15',
      email: 'karthik@example.com',
      phone: '9876543210',
      password: 'pass123',
      religion: 'Hindu',
      caste: 'நாடார்',
      motherTongue: 'Tamil',
      height: "5'10\"",
      maritalStatus: 'Never Married',
      education: "Master's",
      occupation: 'மென்பொருள் பொறியாளர்',
      income: '20-50 LPA',
      city: 'Chennai',
      about: 'முன்னணி தொழில்நுட்ப நிறுவனத்தில் மென்பொருள் பொறியாளராக வேலை செய்கிறேன். பயணம், புகைப்படம் எடுப்பது மற்றும் கிரிக்கெட் விளையாடுவது எனக்கு பிடிக்கும். குடும்பம் சார்ந்த நவீன மதிப்புகள் கொண்டவன்.',
      family: 'தந்தை ஓய்வு பெற்ற அரசு ஊழியர், தாய் இல்லத்தரசி, ஒரு தங்கை திருமணமானவர்.',
      prefAgeFrom: 23,
      prefAgeTo: 28,
      prefReligion: 'Hindu',
      verified: true,
      avatar: 'https://picsum.photos/seed/tamilman1/400/500.jpg'
    },
    {
      id: 2,
      firstName: 'பிரியா',
      lastName: 'சுந்தரம்',
      gender: 'Female',
      dob: '1996-07-22',
      email: 'priya@example.com',
      phone: '9876543211',
      password: 'pass123',
      religion: 'Hindu',
      caste: 'பிள்ளை',
      motherTongue: 'Tamil',
      height: "5'4\"",
      maritalStatus: 'Never Married',
      education: "Master's",
      occupation: 'மருத்துவர்',
      income: '10-20 LPA',
      city: 'Coimbatore',
      about: 'குழந்தை மருத்துவத்தில் நிபுணத்துவம் பெற்ற மருத்துவர். படிப்பது, சமைப்பது மற்றும் குடும்பத்துடன் இருப்பது எனக்கு பிடிக்கும். அன்பான மற்றும் புரிந்துகொள்ளும் துணையைத் தேடுகிறேன்.',
      family: 'தந்தை வணிகர், தாய் ஆசிரியை, ஒரு மூத்த சகோதரன்.',
      prefAgeFrom: 26,
      prefAgeTo: 32,
      prefReligion: 'Hindu',
      verified: true,
      avatar: 'https://picsum.photos/seed/tamilwoman1/400/500.jpg'
    }
  ],
  interests: [],
  shortlists: [],
  sessions: {}
};

const db = new sqlite3.Database(DB_FILE);

function ensureStore() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultDb, null, 2), 'utf8');
  }
}

function readJsonStore() {
  ensureStore();
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function writeJsonStore(payload) {
  ensureStore();
  fs.writeFileSync(DATA_FILE, JSON.stringify(payload, null, 2), 'utf8');
}

function runQuery(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function onRun(err) {
      if (err) return reject(err);
      resolve({ lastID: this.lastID, changes: this.changes });
    });
  });
}

function allQuery(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) return reject(err);
      resolve(rows || []);
    });
  });
}

function getCount(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) return reject(err);
      resolve(row?.count ?? 0);
    });
  });
}

async function initializeDatabase() {
  ensureStore();
  await runQuery(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    payload TEXT NOT NULL
  )`);
  await runQuery(`CREATE TABLE IF NOT EXISTS interests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    payload TEXT NOT NULL
  )`);
  await runQuery(`CREATE TABLE IF NOT EXISTS shortlists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    payload TEXT NOT NULL
  )`);
  await runQuery(`CREATE TABLE IF NOT EXISTS sessions (
    id INTEGER PRIMARY KEY,
    payload TEXT NOT NULL
  )`);

  const count = await getCount('SELECT COUNT(*) as count FROM users');
  if (Number(count) === 0) {
    const seeded = readJsonStore();
    await storeDbInSqlite(seeded);
  }
}

async function storeDbInSqlite(payload) {
  const dbPayload = payload || { users: [], interests: [], shortlists: [], sessions: {} };
  await runQuery('DELETE FROM users');
  await runQuery('DELETE FROM interests');
  await runQuery('DELETE FROM shortlists');
  await runQuery('DELETE FROM sessions');

  for (const user of dbPayload.users || []) {
    await runQuery('INSERT INTO users (id, payload) VALUES (?, ?)', [user.id, JSON.stringify(user)]);
  }

  for (const interest of dbPayload.interests || []) {
    await runQuery('INSERT INTO interests (payload) VALUES (?)', [JSON.stringify(interest)]);
  }

  for (const shortlist of dbPayload.shortlists || []) {
    await runQuery('INSERT INTO shortlists (payload) VALUES (?)', [JSON.stringify(shortlist)]);
  }

  for (const [key, value] of Object.entries(dbPayload.sessions || {})) {
    await runQuery('INSERT INTO sessions (id, payload) VALUES (?, ?)', [Number(key), JSON.stringify(value)]);
  }

  writeJsonStore(dbPayload);
}

async function readDb() {
  await initializeDatabase();
  const [users, interests, shortlists, sessions] = await Promise.all([
    allQuery('SELECT payload FROM users ORDER BY id ASC'),
    allQuery('SELECT payload FROM interests ORDER BY id ASC'),
    allQuery('SELECT payload FROM shortlists ORDER BY id ASC'),
    allQuery('SELECT id, payload FROM sessions ORDER BY id ASC')
  ]);

  return {
    users: users.map(row => JSON.parse(row.payload)),
    interests: interests.map(row => JSON.parse(row.payload)),
    shortlists: shortlists.map(row => JSON.parse(row.payload)),
    sessions: Object.fromEntries(sessions.map(row => [String(row.id), JSON.parse(row.payload)]))
  };
}

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json({ limit: '2mb' }));
app.use(express.static(ROOT));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'KalyanaMalam backend is running' });
});

app.get('/api/db', async (req, res) => {
  try {
    const dbPayload = await readDb();
    res.json(dbPayload);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/db', async (req, res) => {
  const payload = req.body;
  if (!payload || !Array.isArray(payload.users)) {
    return res.status(400).json({ error: 'Invalid database payload' });
  }

  try {
    await storeDbInSqlite(payload);
    return res.json({ ok: true, message: 'Database synced to backend' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.post('/api/register', async (req, res) => {
  const dbPayload = await readDb();
  const user = req.body;

  if (!user || !user.email || !user.password) {
    return res.status(400).json({ error: 'Missing required registration fields' });
  }

  if (dbPayload.users.some(entry => entry.email.toLowerCase() === user.email.toLowerCase())) {
    return res.status(409).json({ error: 'Email already registered' });
  }

  const nextUser = {
    id: dbPayload.users.length + 1,
    ...user,
    verified: false,
    avatar: `https://picsum.photos/seed/tamuser${dbPayload.users.length + 1}/400/500.jpg`
  };

  dbPayload.users.push(nextUser);
  await storeDbInSqlite(dbPayload);
  return res.status(201).json({ ok: true, user: nextUser });
});

app.post('/api/login', async (req, res) => {
  const dbPayload = await readDb();
  const { email, password } = req.body;
  const user = dbPayload.users.find(entry => entry.email === email && entry.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  dbPayload.sessions[user.id] = { loggedInAt: Date.now() };
  await storeDbInSqlite(dbPayload);
  return res.json({ ok: true, user });
});

app.get('/api/users', async (req, res) => {
  const dbPayload = await readDb();
  res.json(dbPayload.users);
});

app.post('/api/interests', async (req, res) => {
  const dbPayload = await readDb();
  const { fromId, toId } = req.body;
  const existing = dbPayload.interests.find(interest => interest.fromId === fromId && interest.toId === toId);

  if (existing) {
    return res.json({ ok: true, message: 'Interest already exists', interest: existing });
  }

  dbPayload.interests.push({ fromId, toId, status: 'pending', timestamp: Date.now() });
  await storeDbInSqlite(dbPayload);
  return res.status(201).json({ ok: true, message: 'Interest sent' });
});

app.post('/api/shortlists', async (req, res) => {
  const dbPayload = await readDb();
  const { userId, profileId } = req.body;
  const existing = dbPayload.shortlists.find(entry => entry.userId === userId && entry.profileId === profileId);

  if (existing) {
    dbPayload.shortlists = dbPayload.shortlists.filter(entry => !(entry.userId === userId && entry.profileId === profileId));
    await storeDbInSqlite(dbPayload);
    return res.json({ ok: true, message: 'Shortlist removed' });
  }

  dbPayload.shortlists.push({ userId, profileId, timestamp: Date.now() });
  await storeDbInSqlite(dbPayload);
  return res.status(201).json({ ok: true, message: 'Shortlist added' });
});

app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'API route not found' });
  }
  return res.sendFile(path.join(ROOT, 'index.html'));
});

initializeDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`KalyanaMalam backend is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to initialize database:', error);
    process.exit(1);
  });
