// ==================== தரவு சேமிப்பகம் ====================
const SAMPLE_PROFILES = [
  { id:1, firstName:"கார்த்திக்", lastName:"ராஜேந்திரன்", gender:"Male", dob:"1995-03-15", email:"karthik@example.com", phone:"9876543210", password:"pass123", religion:"Hindu", caste:"நாடார்", motherTongue:"Tamil", height:"5'10\"", maritalStatus:"Never Married", education:"Master's", occupation:"மென்பொருள் பொறியாளர்", income:"20-50 LPA", city:"Chennai", about:"முன்னணி தொழில்நுட்ப நிறுவனத்தில் மென்பொருள் பொறியாளராக வேலை செய்கிறேன். பயணம், புகைப்படம் எடுப்பது மற்றும் கிரிக்கெட் விளையாடுவது எனக்கு பிடிக்கும். குடும்பம் சார்ந்த நவீன மதிப்புகள் கொண்டவன்.", family:"தந்தை ஓய்வு பெற்ற அரசு ஊழியர், தாய் இல்லத்தரசி, ஒரு தங்கை திருமணமானவர்.", prefAgeFrom:23, prefAgeTo:28, prefReligion:"Hindu", verified:true, avatar:"https://picsum.photos/seed/tamilman1/400/500.jpg" },
  { id:2, firstName:"பிரியா", lastName:"சுந்தரம்", gender:"Female", dob:"1996-07-22", email:"priya@example.com", phone:"9876543211", password:"pass123", religion:"Hindu", caste:"பிள்ளை", motherTongue:"Tamil", height:"5'4\"", maritalStatus:"Never Married", education:"Master's", occupation:"மருத்துவர்", income:"10-20 LPA", city:"Coimbatore", about:"குழந்தை மருத்துவத்தில் நிபுணத்துவம் பெற்ற மருத்துவர். படிப்பது, சமைப்பது மற்றும் குடும்பத்துடன் இருப்பது எனக்கு பிடிக்கும். அன்பான மற்றும் புரிந்துகொள்ளும் துணையைத் தேடுகிறேன்.", family:"தந்தை வணிகர், தாய் ஆசிரியை, ஒரு மூத்த சகோதரன்.", prefAgeFrom:26, prefAgeTo:32, prefReligion:"Hindu", verified:true, avatar:"https://picsum.photos/seed/tamilwoman1/400/500.jpg" },
  { id:3, firstName:"அருண்", lastName:"முருகன்", gender:"Male", dob:"1993-11-08", email:"arun@example.com", phone:"9876543212", password:"pass123", religion:"Hindu", caste:"தேவர்", motherTongue:"Tamil", height:"6'0\"", maritalStatus:"Never Married", education:"Bachelor's", occupation:"வணிகர்", income:"50+ LPA", city:"Madurai", about:"சொந்த ஏற்றுமதி வணிகத்தை நடத்துகிறேன். உடற்பயிற்சி ஆர்வலர், சாலைப் பயணம் மற்றும் புதிய உணவுகளை சுவைத்தது பிடிக்கும். எளிமையான வாழ்க்கை மற்றும் உயர்ந்த சிந்தனை நம்பிக்கை.", family:"வணிக குடும்பம், தந்தை ஜவுளி வணிகம், தாய் இல்லத்தரசி, ஒரு இளைய சகோதரன்.", prefAgeFrom:22, prefAgeTo:27, prefReligion:"", verified:true, avatar:"https://picsum.photos/seed/tamilman2/400/500.jpg" },
  { id:4, firstName:"லக்ஷ்மி", lastName:"கந்தசாமி", gender:"Female", dob:"1997-01-30", email:"lakshmi@example.com", phone:"9876543213", password:"pass123", religion:"Hindu", caste:"கவுந்தர்", motherTongue:"Tamil", height:"5'5\"", maritalStatus:"Never Married", education:"Master's", occupation:"தரவு விஞ்ஞானி", income:"20-50 LPA", city:"Chennai", about:"ஃபின்டெக் ஸ்டார்ட்அப்பில் தரவு விஞ்ஞானி. ஓவியம் வரைவது, யோகா மற்றும் ஆவணப்படங்களைப் பார்ப்பது எனக்கு பிடிக்கும். தொழில் மற்றும் குடும்பம் இரண்டையும் மதிக்கும் துணையைத் தேடுகிறேன்.", family:"தந்தை பேராசிரியர், தாய் கணக்காளர், உடன்பிறப்புகள் இல்லை.", prefAgeFrom:27, prefAgeTo:33, prefReligion:"Hindu", verified:true, avatar:"https://picsum.photos/seed/tamilwoman2/400/500.jpg" },
  { id:5, firstName:"விக்னேஷ்", lastName:"செல்வராஜ்", gender:"Male", dob:"1994-06-12", email:"vignesh@example.com", phone:"9876543214", password:"pass123", religion:"Christian", caste:"", motherTongue:"Tamil", height:"5'9\"", maritalStatus:"Never Married", education:"Master's", occupation:"தயாரிப்பு மேலாளர்", income:"20-50 LPA", city:"Trichy", about:"தொழில்நுட்ப நிறுவனத்தில் தயாரிப்பு மேலாளர். தொழில்நுட்பம், இசை மற்றும் ட்ரெக்கிங் மீது ஆர்வம். பாரம்பரிய மதிப்புகள் மற்றும் நவீன பார்வை கலந்தவன்.", family:"தந்தை ஓய்வு பெற்ற வங்கி மேலாளர், தாய் ஓய்வு பெற்ற ஆசிரியை, ஒரு சகோதரி சென்னையில் திருமணமானவர்.", prefAgeFrom:24, prefAgeTo:29, prefReligion:"", verified:true, avatar:"https://picsum.photos/seed/tamilman3/400/500.jpg" },
  { id:6, firstName:"ஆயிஷா", lastName:"பாத்திமா", gender:"Female", dob:"1996-09-18", email:"aisha@example.com", phone:"9876543215", password:"pass123", religion:"Muslim", caste:"", motherTongue:"Tamil", height:"5'3\"", maritalStatus:"Never Married", education:"Master's", occupation:"கட்டிடக் கலைஞர்", income:"10-20 LPA", city:"Chennai", about:"நிலையான இடங்களை வடிவமைக்கும் கட்டிடக் கலைஞர். கலைக்கலை, கவிதை மற்றும் சமைப்பது பிடிக்கும். மரியாதைக்குரிய மற்றும் வெற்றிகரமான துணையைத் தேடுகிறேன்.", family:"தந்தை கட்டிட பொறியாளர், தாய் இல்லத்தரசி, இரண்டு சகோதரர்கள் திருமணமானவர்கள்.", prefAgeFrom:27, prefAgeTo:33, prefReligion:"Muslim", verified:true, avatar:"https://picsum.photos/seed/tamilwoman3/400/500.jpg" },
  { id:7, firstName:"சதீஷ்", lastName:"குமார்", gender:"Male", dob:"1992-12-05", email:"sathish@example.com", phone:"9876543216", password:"pass123", religion:"Hindu", caste:"முதலியார்", motherTongue:"Tamil", height:"5'8\"", maritalStatus:"Never Married", education:"Doctorate", occupation:"ஆராய்ச்சி விஞ்ஞானி", income:"20-50 LPA", city:"Salem", about:"இயற்பியலில் முனைவர் பட்டம், ஆராய்ச்சி விஞ்ஞானியாக வேலை. இலக்கியம் படிப்பது, தபேலா வாசிப்பது மற்றும் தேயிலை தோட்டங்களை ஆராய்வது பிடிக்கும். எளிமையானவன்.", family:"தந்தை பேராசிரியர், தாய் ஓய்வு பெற்ற நூலகர், திருமணமாகாத மூத்த சகோதரி.", prefAgeFrom:25, prefAgeTo:30, prefReligion:"Hindu", verified:false, avatar:"https://picsum.photos/seed/tamilman4/400/500.jpg" },
  { id:8, firstName:"சரன்யா", lastName:"ஜோசப்", gender:"Female", dob:"1998-04-25", email:"saranya@example.com", phone:"9876543217", password:"pass123", religion:"Christian", caste:"", motherTongue:"Tamil", height:"5'6\"", maritalStatus:"Never Married", education:"Bachelor's", occupation:"நியாயவாதி", income:"10-20 LPA", city:"Thanjavur", about:"பிரபல நிறுவனத்தில் நியாயவாதி. இசை, நடனம் மற்றும் கடலோர சூரிய அஸ்தமனங்களைப் பார்ப்பது பிடிக்கும். படைப்பாற்றல் மற்றும் குடும்ப பிணைப்புகளை மதிக்கும் ஒருவரைத் தேடுகிறேன்.", family:"தந்தை கப்பல் படையில், தாய் நர்ச், ஒரு இளைய சகோதரன் பொறியியல் படிக்கிறான்.", prefAgeFrom:25, prefAgeTo:31, prefReligion:"Christian", verified:true, avatar:"https://picsum.photos/seed/tamilwoman4/400/500.jpg" },
  { id:9, firstName:"தினேஷ்", lastName:"சுப்பிரமணியன்", gender:"Male", dob:"1996-08-14", email:"dinesh@example.com", phone:"9876543218", password:"pass123", religion:"Hindu", caste:"செட்டியார்", motherTongue:"Tamil", height:"5'11\"", maritalStatus:"Never Married", education:"Professional", occupation:"சிஏ", income:"20-50 LPA", city:"Coimbatore", about:"Big 4-ல் சார்ட்டர்ட் அக்கவுண்டண்ட். நிதி கல்வி, சைக்கிளிங் மற்றும் கருநாடக இசை மீது ஆர்வம். நன்கு கல்வியறிவு மற்றும் மகிழ்ச்சியான துணையைத் தேடுகிறேன்.", family:"தந்தை மருத்துவர், தாய் இல்லத்தரசி, தங்கை MBBS படிக்கிறாள்.", prefAgeFrom:23, prefAgeTo:28, prefReligion:"Hindu", verified:true, avatar:"https://picsum.photos/seed/tamilman5/400/500.jpg" },
  { id:10, firstName:"மீனா", lastName:"ராமச்சந்திரன்", gender:"Female", dob:"1995-02-10", email:"meena@example.com", phone:"9876543219", password:"pass123", religion:"Hindu", caste:"ஐயர்", motherTongue:"Tamil", height:"5'3\"", maritalStatus:"Never Married", education:"Master's", occupation:"HR மேலாளர்", income:"10-20 LPA", city:"Chennai", about:"IT நிறுவனத்தில் HR மேலாளர். பரதநாட்டியம், புனைகதை படிப்பது மற்றும் மலை வாசஸ்தலங்களுக்குப் பயணிப்பது பிடிக்கும். அன்பான மற்றும் ஆதரவான வாழ்க்கைத் துணையைத் தேடுகிறேன்.", family:"தந்தை முன்னாள் ராணுவம், தாய் இல்லத்தரசி, ஒரு மூத்த சகோதரன் துபாயில் வேலை.", prefAgeFrom:28, prefAgeTo:34, prefReligion:"Hindu", verified:true, avatar:"https://picsum.photos/seed/tamilwoman5/400/500.jpg" },
  { id:11, firstName:"இப்ராகிம்", lastName:"ஷெய்க்", gender:"Male", dob:"1994-10-20", email:"ibrahim@example.com", phone:"9876543220", password:"pass123", religion:"Muslim", caste:"", motherTongue:"Tamil", height:"5'10\"", maritalStatus:"Never Married", education:"Master's", occupation:"குடிசார் பொறியாளர்", income:"10-20 LPA", city:"Madurai", about:"உள்கட்டமைப்பு திட்டங்களில் பணிபுரியும் குடிசார் பொறியாளர். கால்பந்து, புகைப்படம் மற்றும் சமூக சேவை பிடிக்கும். எளிமையான மற்றும் அன்பான துணையைத் தேடுகிறேன்.", family:"தந்தை ஒப்பந்தகாரர், தாய் இல்லத்தரசி, இரண்டு இளைய சகோதரிகள்.", prefAgeFrom:22, prefAgeTo:27, prefReligion:"Muslim", verified:false, avatar:"https://picsum.photos/seed/tamilman6/400/500.jpg" },
  { id:12, firstName:"திவ்யா", lastName:"வெங்கடராமன்", gender:"Female", dob:"1997-06-03", email:"divya@example.com", phone:"9876543221", password:"pass123", religion:"Hindu", caste:"ஐயங்கார்", motherTongue:"Tamil", height:"5'7\"", maritalStatus:"Never Married", education:"Master's", occupation:"வழக்கறிஞர்", income:"10-20 LPA", city:"Salem", about:"பிரபல நிறுவனத்தில் கார்ப்பரேட் வழக்கறிஞர். கர்நாடக இசை, யோகா மற்றும் தொண்டு பிடிக்கும். பாரம்பரியத்தையும் தனித்துவத்தையும் மதிக்கும் துணையைத் தேடுகிறேன்.", family:"தந்தை நீதிபதி, தாய் இல்லத்தரசி, உடன்பிறப்புகள் இல்லை.", prefAgeFrom:27, prefAgeTo:33, prefReligion:"Hindu", verified:true, avatar:"https://picsum.photos/seed/tamilwoman6/400/500.jpg" }
];

const SUCCESS_STORIES = [
  { id:1, name1:"கார்த்திக்", name2:"பிரியா", img:"https://picsum.photos/seed/tamstory1/600/400.jpg", date:"மார்ச் 2024", story:"KalyanaMalam-ல் சந்தித்து உடனடியாக பயணம் மற்றும் உணவு மீதான எங்கள் பொதுவான ஆர்வத்தில் இணைந்தோம். 6 மாத அறிமுகத்திற்குப் பிறகு, எங்கள் குடும்பங்கள் சந்தித்து இதுதான் என உணர்ந்தோம். KalyanaMalam-க்கு நன்றி!" },
  { id:2, name1:"விக்னேஷ்", name2:"மீனா", img:"https://picsum.photos/seed/tamstory2/600/400.jpg", date:"ஜனவரி 2024", story:"ஆன்லைன் திருமணத்தில் சந்தேகமாக இருந்தேன், ஆனால் KalyanaMalam என் மனதை மாற்றியது. மீனாவின் சுயவிவரம் என் கண்கை ஈர்த்தது. முதல் உரையாடலிலேயே அவள் சிறப்பு என உணர்ந்தேன். கேரளாவில் அழகான திருமணம்." },
  { id:3, name1:"தினேஷ்", name2:"லக்ஷ்மி", img:"https://picsum.photos/seed/tamstory3/600/400.jpg", date:"நவம்பர் 2023", story:"மாதங்களாக குடும்பங்கள் தேடினாலும், KalyanaMalam-ன் ஸ்மார்ட் பொருத்தம் சரியான ஜோடியைக் கண்டறிந்தது. தரவு மற்றும் அனலிட்டிக்ஸ் மீதான எங்கள் பிணைப்பில் இணைந்தோம். கோயம்புத்தூரில் மகிழ்ச்சியாக வாழ்கிறோம்." },
  { id:4, name1:"அருண்", name2:"சரன்யா", img:"https://picsum.photos/seed/tamstory4/600/400.jpg", date:"செப்டம்பர் 2023", story:"வெவ்வேறு சமூகங்களிலிருந்து வந்தாலும் காதலால் இணைந்தோம். மதுரை மற்றும் தஞ்சாவூருக்கு இடையேயான தூரம் குறைந்தது. எங்கள் திருமணம் இரண்டு கலாச்சாரங்களின் அழகான கலவை." },
  { id:5, name1:"சதீஷ்", name2:"திவ்யா", img:"https://picsum.photos/seed/tamstory5/600/400.jpg", date:"ஜூலை 2023", story:"இரண்டு அறிவாளிகள் காதலைக் கண்டறிவது — அதுதான் எங்கள் கதை. இலக்கியம், அறிவியல் மற்றும் வாழ்க்கை பற்றிய இரவு நேர உரையாடல்களில் இணைந்தோம். KalyanaMalam இரு அறிமுறை தனிநபர்களுக்கு துணையைக் கண்டுபிடிக்க உதவியது." },
  { id:6, name1:"இப்ராகிம்", name2:"ஆயிஷா", img:"https://picsum.photos/seed/tamstory6/600/400.jpg", date:"மே 2023", story:"KalyanaMalam எங்கள் விருப்பங்களைப் புரிந்து சரியாகப் பொருத்தியது. முதல் வீடியோ அழைப்பிலிருந்து நிகா செரமனி வரை எல்லாம் இயல்பாக இருந்தது. இந்த தளம் மதிப்புகளையும் தனியுரிமையையும் மதிக்கிறது." }
];

const API_BASE = window.location.protocol === 'file:' ? 'http://localhost:3000' : window.location.origin;

async function fetchJSON(path, options = {}) {
  const response = await fetch(API_BASE + path, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || 'Request failed');
  return data;
}

async function bootstrapBackend() {
  try {
    const remoteDb = await fetchJSON('/api/db');
    if (remoteDb && Array.isArray(remoteDb.users)) {
      localStorage.setItem('kalyanaDB', JSON.stringify(remoteDb));
    }
  } catch (error) {
    console.warn('Backend unavailable, using local storage fallback:', error.message);
  }
}

async function syncDbToBackend(db) {
  try {
    await fetchJSON('/api/db', {
      method: 'POST',
      body: JSON.stringify(db)
    });
  } catch (error) {
    console.warn('Backend sync skipped:', error.message);
  }
}

// ==================== நிலை மேலாண்மை ====================

function getDB() {
  const d = localStorage.getItem('kalyanaDB');
  if (!d) {
    const db = {
      users: SAMPLE_PROFILES,
      interests: [],
      shortlists: [],
      sessions: {}
    };
    localStorage.setItem('kalyanaDB', JSON.stringify(db));
    return db;
  }
  return JSON.parse(d);
}

function saveDB(db) {
  localStorage.setItem('kalyanaDB', JSON.stringify(db));
  syncDbToBackend(db);
}

function getCurrentUser() {
  const s = localStorage.getItem('kalyanaSession');
  if (!s) return null;
  return getDB().users.find(u => u.id === parseInt(s)) || null;
}

function setSession(id) {
  localStorage.setItem('kalyanaSession', id.toString());
}

function clearSession() {
  localStorage.removeItem('kalyanaSession');
}


// ==================== டோஸ்ட் ====================

function showToast(msg, type = 'success') {
  const c = document.getElementById('toastContainer');
  const t = document.createElement('div');
  const icons = {
    success: 'fa-check-circle',
    error: 'fa-exclamation-circle',
    info: 'fa-info-circle',
    warning: 'fa-exclamation-triangle'
  };
  const colors = {
    success: '#1B7A3D',
    error: '#A0153E',
    info: '#457B9D',
    warning: '#E8913A'
  };
  t.className = 'toast flex items-center gap-3 px-6 py-4 rounded-2xl shadow-xl text-white text-sm font-medium min-w-[280px]';
  t.style.background = colors[type];
  t.innerHTML = `<i class="fas ${icons[type]} text-lg"></i><span>${msg}</span>`;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}


// ==================== வழிசெலுத்தல் ====================

function navigateTo(page) {
  document.querySelectorAll('[id^="page-"]').forEach(p => p.classList.add('hidden'));
  const t = document.getElementById('page-' + page);
  if (t) {
    t.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (page === 'browse') renderBrowseProfiles();
  if (page === 'stories') renderStories();
  if (page === 'dashboard') {
    if (!getCurrentUser()) { openModal('login'); return; }
    renderDashboard();
  }
  if (page === 'search') document.getElementById('searchResults').innerHTML = '';
}

function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('hidden');
}


// ==================== மோடல் ====================

function openModal(n) {
  document.getElementById('modal-' + n).classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  if (n === 'register') regNextStep(1);
}

function closeModal(n) {
  document.getElementById('modal-' + n).classList.add('hidden');
  document.body.style.overflow = '';
}

function togglePassword(id, btn) {
  const i = document.getElementById(id);
  const ic = btn.querySelector('i');
  if (i.type === 'password') {
    i.type = 'text';
    ic.className = 'fas fa-eye-slash';
  } else {
    i.type = 'password';
    ic.className = 'fas fa-eye';
  }
}


// ==================== பதிவு படிகள் ====================

function regNextStep(step) {
  if (step === 2) {
    const f = ['regFirstName','regLastName','regGender','regDob','regEmail','regPhone','regPassword'];
    for (const x of f) {
      const el = document.getElementById(x);
      if (!el.value.trim()) {
        el.focus();
        showToast('அனைத்து கட்டாய புலங்களையும் நிரப்புங்கள்', 'warning');
        return;
      }
    }
    const em = document.getElementById('regEmail').value;
    if (getDB().users.find(u => u.email === em)) {
      showToast('மின்னஞ்சல் ஏற்கனவே பதிவு செய்யப்பட்டது', 'error');
      return;
    }
  }
  if (step === 3) {
    const f = ['regReligion','regEducation','regOccupation','regCity'];
    for (const x of f) {
      const el = document.getElementById(x);
      if (!el.value.trim()) {
        el.focus();
        showToast('அனைத்து கட்டாய புலங்களையும் நிரப்புங்கள்', 'warning');
        return;
      }
    }
  }

  document.getElementById('regStep1').classList.add('hidden');
  document.getElementById('regStep2').classList.add('hidden');
  document.getElementById('regStep3').classList.add('hidden');
  document.getElementById('regStep' + step).classList.remove('hidden');

  for (let i = 1; i <= 3; i++) {
    const d = document.getElementById('regStep' + i + 'Dot');
    d.className = i <= step
      ? 'w-10 h-10 rounded-full bg-[var(--accent)] text-white flex items-center justify-center font-bold text-sm'
      : 'w-10 h-10 rounded-full bg-[var(--border)] text-[var(--muted)] flex items-center justify-center font-bold text-sm';
  }
  document.getElementById('regLine1').style.background = step >= 2 ? 'var(--accent)' : 'var(--border)';
  document.getElementById('regLine2').style.background = step >= 3 ? 'var(--accent)' : 'var(--border)';
}


// ==================== அங்கீகாரம் ====================

async function handleRegister(e) {
  e.preventDefault();
  const payload = {
    firstName: document.getElementById('regFirstName').value.trim(),
    lastName: document.getElementById('regLastName').value.trim(),
    gender: document.getElementById('regGender').value,
    dob: document.getElementById('regDob').value,
    email: document.getElementById('regEmail').value.trim(),
    phone: document.getElementById('regPhone').value,
    password: document.getElementById('regPassword').value,
    religion: document.getElementById('regReligion').value,
    caste: document.getElementById('regCaste').value.trim(),
    motherTongue: document.getElementById('regMotherTongue').value,
    height: document.getElementById('regHeight').value,
    maritalStatus: document.getElementById('regMaritalStatus').value,
    education: document.getElementById('regEducation').value,
    occupation: document.getElementById('regOccupation').value.trim(),
    income: document.getElementById('regIncome').value,
    city: document.getElementById('regCity').value.trim(),
    about: document.getElementById('regAbout').value.trim(),
    family: document.getElementById('regFamily').value.trim(),
    prefAgeFrom: parseInt(document.getElementById('regPrefAgeFrom').value) || 0,
    prefAgeTo: parseInt(document.getElementById('regPrefAgeTo').value) || 0,
    prefReligion: document.getElementById('regPrefReligion').value
  };

  try {
    const response = await fetchJSON('/api/register', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    const remoteDb = await fetchJSON('/api/db');
    localStorage.setItem('kalyanaDB', JSON.stringify(remoteDb));
    setSession(response.user.id);
    closeModal('register');
    updateAuthUI();
    showToast('பதிவு வெற்றிகரமாக நிறைவேறியது! KalyanaMalam-க்கு வரவேற்கிறோம்', 'success');
    navigateTo('dashboard');
    document.getElementById('registerForm').reset();
    return;
  } catch (error) {
    console.warn('Backend registration failed, using local fallback:', error.message);
  }

  const db = getDB();
  const u = {
    id: db.users.length + 1,
    ...payload,
    verified: false,
    avatar: `https://picsum.photos/seed/tamuser${db.users.length + 1}/400/500.jpg`
  };
  db.users.push(u);
  saveDB(db);
  setSession(u.id);
  closeModal('register');
  updateAuthUI();
  showToast('பதிவு வெற்றிகரமாக நிறைவேறியது! KalyanaMalam-க்கு வரவேற்கிறோம்', 'success');
  navigateTo('dashboard');
  document.getElementById('registerForm').reset();
}

async function handleLogin(e) {
  e.preventDefault();
  const em = document.getElementById('loginEmail').value.trim();
  const pw = document.getElementById('loginPassword').value;

  try {
    const response = await fetchJSON('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email: em, password: pw })
    });
    const remoteDb = await fetchJSON('/api/db');
    localStorage.setItem('kalyanaDB', JSON.stringify(remoteDb));
    setSession(response.user.id);
    closeModal('login');
    updateAuthUI();
    showToast('மீண்டும் வரவேற்கிறோம், ' + response.user.firstName + '!', 'success');
    navigateTo('dashboard');
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
    return;
  } catch (error) {
    console.warn('Backend login unavailable, trying local fallback:', error.message);
  }

  const u = getDB().users.find(u => u.email === em && u.password === pw);
  if (!u) {
    showToast('தவறான மின்னஞ்சல் அல்லது கடவுச்சொல்', 'error');
    return;
  }
  setSession(u.id);
  closeModal('login');
  updateAuthUI();
  showToast('மீண்டும் வரவேற்கிறோம், ' + u.firstName + '!', 'success');
  navigateTo('dashboard');
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
}

function logout() {
  clearSession();
  updateAuthUI();
  navigateTo('home');
  showToast('வெற்றிகரமாக வெளியேறினீர்கள்', 'info');
}

function updateAuthUI() {
  const u = getCurrentUser();
  const a = document.getElementById('authButtons');
  const m = document.getElementById('userMenu');
  if (u) {
    a.classList.add('hidden');
    m.classList.remove('hidden');
    m.classList.add('flex');
    document.getElementById('navAvatar').src = u.avatar;
    document.getElementById('navAvatar').alt = u.firstName;
    document.getElementById('navName').textContent = u.firstName;
  } else {
    a.classList.remove('hidden');
    m.classList.add('hidden');
    m.classList.remove('flex');
  }
}


// ==================== சுயவிவர அட்டை ====================

function getAge(dob) {
  const t = new Date();
  const b = new Date(dob);
  let a = t.getFullYear() - b.getFullYear();
  const m = t.getMonth() - b.getMonth();
  if (m < 0 || (m === 0 && t.getDate() < b.getDate())) a--;
  return a;
}

function createProfileCard(profile, showActions = true) {
  const age = getAge(profile.dob);
  const lookingFor = profile.gender === 'Male' ? 'மணமகள்' : 'மணமன்';
  const isSL = isProfileShortlisted(profile.id);

  return `
    <div class="profile-card bg-white rounded-2xl border border-[var(--border)] overflow-hidden group">
      <div class="relative h-64 overflow-hidden">
        <img src="${profile.avatar}" alt="${profile.firstName}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        ${profile.verified ? '<div class="absolute top-3 left-3 badge-verified text-white text-xs font-semibold px-3 py-1 rounded-full"><i class="fas fa-shield-alt mr-1"></i>சரிபார்க்கப்பட்டது</div>' : ''}
        <div class="absolute top-3 right-3">
          <button onclick="toggleShortlist(${profile.id})" class="w-9 h-9 rounded-full ${isSL ? 'bg-[var(--accent)] text-white' : 'bg-white/90 text-[var(--muted)]'} flex items-center justify-center hover:scale-110 transition" title="${isSL ? 'பட்டியலிலிருந்து நீக்கு' : 'பட்டியலிடு'}">
            <i class="fas fa-bookmark"></i>
          </button>
        </div>
        <div class="absolute bottom-3 left-4 right-4">
          <h3 class="text-xl font-bold text-white">${profile.firstName} ${profile.lastName}</h3>
          <p class="text-white/80 text-sm">${age} வயது, ${profile.height} | ${lookingFor}</p>
        </div>
      </div>
      <div class="p-5 space-y-3">
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 rounded-full bg-[var(--cream)] text-xs font-medium text-[var(--muted)]"><i class="fas fa-briefcase mr-1"></i>${profile.occupation}</span>
          <span class="px-3 py-1 rounded-full bg-[var(--cream)] text-xs font-medium text-[var(--muted)]"><i class="fas fa-graduation-cap mr-1"></i>${profile.education}</span>
        </div>
        <div class="flex items-center gap-4 text-sm text-[var(--muted)]">
          <span><i class="fas fa-map-marker-alt text-[var(--accent)] mr-1"></i>${profile.city}</span>
          <span><i class="fas fa-rupee-sign text-[var(--accent)] mr-1"></i>${profile.income || 'குறிப்பிடப்படவில்லை'}</span>
        </div>
        <div class="flex items-center gap-2 text-sm text-[var(--muted)]">
          <i class="fas fa-pray text-[var(--accent)]"></i>
          <span>${profile.religion}${profile.caste ? ' | ' + profile.caste : ''}</span>
        </div>
        ${showActions ? `
        <div class="flex gap-2 pt-2">
          <button onclick="viewProfile(${profile.id})" class="flex-1 py-2.5 rounded-xl bg-[var(--accent)] text-white text-sm font-semibold hover:bg-[var(--deep)] transition">
            <i class="fas fa-eye mr-1"></i>பார்
          </button>
          <button onclick="sendInterest(${profile.id})" class="flex-1 py-2.5 rounded-xl border-2 border-[var(--accent)] text-[var(--accent)] text-sm font-semibold hover:bg-[var(--accent)] hover:text-white transition" id="interestBtn-${profile.id}">
            <i class="fas fa-heart mr-1"></i>ஆர்வம்
          </button>
        </div>` : ''}
      </div>
    </div>
  `;
}


// ==================== உலாவு & வடிப்பான் ====================

function renderBrowseProfiles() {
  const profiles = getFilteredProfiles();
  const grid = document.getElementById('browseGrid');
  const noR = document.getElementById('noResults');
  const cu = getCurrentUser();

  if (profiles.length === 0) {
    grid.innerHTML = '';
    noR.classList.remove('hidden');
    return;
  }
  noR.classList.add('hidden');

  const f = cu ? profiles.filter(p => p.id !== cu.id) : profiles;
  grid.innerHTML = f.map(p => createProfileCard(p)).join('');
}

function getFilteredProfiles() {
  const db = getDB();
  let profiles = [...db.users];
  const gender = document.getElementById('filterGender')?.value;
  const religion = document.getElementById('filterReligion')?.value;
  const ageRange = document.getElementById('filterAge')?.value;
  const location = document.getElementById('filterLocation')?.value;

  if (gender === 'Bride') profiles = profiles.filter(p => p.gender === 'Female');
  else if (gender === 'Groom') profiles = profiles.filter(p => p.gender === 'Male');

  if (religion !== 'all') profiles = profiles.filter(p => p.religion === religion);

  if (ageRange !== 'all') {
    const [min, max] = ageRange.split('-').map(Number);
    profiles = profiles.filter(p => { const a = getAge(p.dob); return a >= min && a <= max; });
  }

  if (location !== 'all') profiles = profiles.filter(p => p.city === location);

  return profiles;
}

function applyFilters() { renderBrowseProfiles(); }

function resetFilters() {
  document.getElementById('filterGender').value = 'all';
  document.getElementById('filterReligion').value = 'all';
  document.getElementById('filterAge').value = 'all';
  document.getElementById('filterLocation').value = 'all';
  renderBrowseProfiles();
}


// ==================== மேம்பட்ட தேடல் ====================

function performAdvancedSearch() {
  const db = getDB();
  let profiles = [...db.users];
  const currentUser = getCurrentUser();

  const gender = document.getElementById('searchGender').value;
  const ageFrom = parseInt(document.getElementById('searchAgeFrom').value) || 0;
  const ageTo = parseInt(document.getElementById('searchAgeTo').value) || 100;
  const religion = document.getElementById('searchReligion').value;
  const education = document.getElementById('searchEducation').value;
  const occupation = document.getElementById('searchOccupation').value.trim().toLowerCase();
  const city = document.getElementById('searchCity').value.trim().toLowerCase();
  const income = document.getElementById('searchIncome').value;

  if (gender === 'Bride') profiles = profiles.filter(p => p.gender === 'Female');
  else if (gender === 'Groom') profiles = profiles.filter(p => p.gender === 'Male');
  if (ageFrom) profiles = profiles.filter(p => getAge(p.dob) >= ageFrom);
  if (ageTo < 100) profiles = profiles.filter(p => getAge(p.dob) <= ageTo);
  if (religion) profiles = profiles.filter(p => p.religion === religion);
  if (education) profiles = profiles.filter(p => p.education === education);
  if (occupation) profiles = profiles.filter(p => p.occupation.toLowerCase().includes(occupation));
  if (city) profiles = profiles.filter(p => p.city.toLowerCase().includes(city));
  if (income) profiles = profiles.filter(p => p.income && p.income.includes(income.split('-')[0]));

  if (currentUser) profiles = profiles.filter(p => p.id !== currentUser.id);

  const container = document.getElementById('searchResults');
  if (profiles.length === 0) {
    container.innerHTML = '<div class="text-center py-16"><i class="fas fa-search text-5xl text-[var(--border)] mb-4"></i><p class="text-xl font-bold text-[var(--deep)]">முடிவுகள் எதுவும் கிடைக்கவில்லை</p><p class="text-[var(--muted)] mt-2">வேறு தேடல் அளவுகோல்களை முயற்சிக்கவும்</p></div>';
    return;
  }

  container.innerHTML = '<p class="text-[var(--muted)] mb-6">' + profiles.length + ' சுயவிவரங்கள் கிடைத்தன</p><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">' + profiles.map(p => createProfileCard(p)).join('') + '</div>';
  showToast(profiles.length + ' பொருந்தும் சுயவிவரங்கள் கிடைத்தன', 'info');
}

function clearAdvancedSearch() {
  ['searchGender','searchAgeFrom','searchAgeTo','searchReligion','searchEducation','searchOccupation','searchCity','searchIncome'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('searchResults').innerHTML = '';
}


// ==================== சுயவிவர விவரம் ====================

function viewProfile(id) {
  const db = getDB();
  const profile = db.users.find(u => u.id === id);
  if (!profile) return;

  const age = getAge(profile.dob);
  const currentUser = getCurrentUser();
  const interestStatus = currentUser ? getInterestStatus(currentUser.id, id) : null;
  const isSL = isProfileShortlisted(id);

  let matchScore = 65 + Math.floor(Math.random() * 25);
  if (currentUser) {
    if (currentUser.prefReligion && currentUser.prefReligion === profile.religion) matchScore = Math.min(matchScore + 10, 98);
  }

  const container = document.getElementById('profileDetailContent');
  container.innerHTML = `
    <button onclick="navigateTo('browse')" class="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition mb-6 font-medium">
      <i class="fas fa-arrow-left"></i> சுயவிவரங்களுக்கு திரும்பு
    </button>
    <div class="bg-white rounded-3xl border border-[var(--border)] overflow-hidden shadow-sm">
      <div class="relative h-80 sm:h-96">
        <img src="${profile.avatar}" alt="${profile.firstName}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6 text-white">
          <div class="flex items-end justify-between">
            <div>
              <div class="flex items-center gap-3 mb-2">
                <h1 class="text-3xl font-black">${profile.firstName} ${profile.lastName}</h1>
                ${profile.verified ? '<span class="badge-verified text-xs font-semibold px-3 py-1 rounded-full"><i class="fas fa-shield-alt mr-1"></i>சரிபார்க்கப்பட்டது</span>' : ''}
              </div>
              <p class="text-white/80 text-lg">${age} வயது, ${profile.height} | ${profile.religion} | ${profile.maritalStatus === 'Never Married' ? 'முதல் திருமணம்' : profile.maritalStatus}</p>
              <p class="text-white/60 text-sm mt-1"><i class="fas fa-map-marker-alt mr-1"></i>${profile.city}</p>
            </div>
            <div class="text-right">
              <div class="text-3xl font-black text-[var(--gold)]">${matchScore}%</div>
              <div class="text-xs text-white/60">பொருத்த மதிப்பெண்</div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-8">
        <div class="flex flex-wrap gap-3 mb-8">
          ${currentUser ? `
          <button onclick="sendInterest(${profile.id})" class="px-6 py-3 rounded-xl ${interestStatus === 'sent' ? 'bg-green-100 text-green-700 border border-green-200' : interestStatus === 'accepted' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-[var(--accent)] text-white hover:bg-[var(--deep)]'} font-semibold transition" id="detailInterestBtn-${profile.id}">
            <i class="fas fa-heart mr-2"></i>${interestStatus === 'sent' ? 'ஆர்வம் அனுப்பப்பட்டது' : interestStatus === 'accepted' ? 'இணைக்கப்பட்டது' : 'ஆர்வம் அனுப்பு'}
          </button>
          <button onclick="toggleShortlist(${profile.id});viewProfile(${profile.id})" class="px-6 py-3 rounded-xl ${isSL ? 'bg-[var(--accent)] text-white' : 'border-2 border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)]'} font-semibold transition">
            <i class="fas fa-bookmark mr-2"></i>${isSL ? 'பட்டியலிடப்பட்டது' : 'பட்டியலிடு'}
          </button>
          ` : '<button onclick="openModal(\'login\')" class="px-6 py-3 rounded-xl bg-[var(--accent)] text-white font-semibold hover:bg-[var(--deep)] transition"><i class="fas fa-heart mr-2"></i>இணைப்பிக்கு உள்நுழை</button>'}
        </div>
        <div class="mb-8">
          <h2 class="text-xl font-bold text-[var(--deep)] mb-3 flex items-center gap-2"><i class="fas fa-user text-[var(--accent)]"></i>சுயவிவரம்</h2>
          <p class="text-[var(--muted)] leading-relaxed">${profile.about || 'தகவல் வழங்கப்படவில்லை.'}</p>
        </div>
        <div class="mb-8">
          <h2 class="text-xl font-bold text-[var(--deep)] mb-4 flex items-center gap-2"><i class="fas fa-list text-[var(--accent)]"></i>விவரங்கள்</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${detailItem('வயது', age + ' ஆண்டுகள்')}
            ${detailItem('உயரம்', profile.height || 'குறிப்பிடப்படவில்லை')}
            ${detailItem('திருமண நிலை', profile.maritalStatus === 'Never Married' ? 'முதல் திருமணம்' : profile.maritalStatus)}
            ${detailItem('மதம்', profile.religion)}
            ${detailItem('சாதி/உட்பிரிவு', profile.caste || 'குறிப்பிடப்படவில்லை')}
            ${detailItem('தாய் மொழி', profile.motherTongue || 'குறிப்பிடப்படவில்லை')}
            ${detailItem('கல்வி', profile.education)}
            ${detailItem('வேலை', profile.occupation)}
            ${detailItem('ஆண்டு வருமானம்', profile.income || 'குறிப்பிடப்படவில்லை')}
            ${detailItem('நகரம்', profile.city)}
            ${detailItem('சுயவிவரம்', 'தனக்காக')}
          </div>
        </div>
        <div>
          <h2 class="text-xl font-bold text-[var(--deep)] mb-3 flex items-center gap-2"><i class="fas fa-home text-[var(--accent)]"></i>குடும்ப விவரங்கள்</h2>
          <p class="text-[var(--muted)] leading-relaxed">${profile.family || 'தகவல் வழங்கப்படவில்லை.'}</p>
        </div>
      </div>
    </div>
  `;
  navigateTo('profileDetail');
}

function detailItem(label, value) {
  return '<div class="flex justify-between py-3 border-b border-[var(--border)]"><span class="text-sm text-[var(--muted)]">' + label + '</span><span class="text-sm font-semibold text-[var(--deep)]">' + value + '</span></div>';
}


// ==================== ஆர்வங்கள் & பட்டியல் ====================

async function sendInterest(profileId) {
  const currentUser = getCurrentUser();
  if (!currentUser) { openModal('login'); return; }
  if (currentUser.id === profileId) return;

  try {
    await fetchJSON('/api/interests', {
      method: 'POST',
      body: JSON.stringify({ fromId: currentUser.id, toId: profileId })
    });
    const remoteDb = await fetchJSON('/api/db');
    localStorage.setItem('kalyanaDB', JSON.stringify(remoteDb));
    showToast('ஆர்வம் வெற்றிகரமாக அனுப்பப்பட்டது!', 'success');

    const btn = document.getElementById('interestBtn-' + profileId);
    if (btn) {
      btn.innerHTML = '<i class="fas fa-heart mr-1"></i>அனுப்பப்பட்டது';
      btn.classList.add('opacity-60');
    }
    return;
  } catch (error) {
    console.warn('Backend interest sync failed, using local fallback:', error.message);
  }

  const db = getDB();
  const existing = db.interests.find(i => i.fromId === currentUser.id && i.toId === profileId);
  if (existing) { showToast('ஆர்வம் ஏற்கனவே அனுப்பப்பட்டது', 'info'); return; }

  db.interests.push({ fromId: currentUser.id, toId: profileId, status: 'pending', timestamp: Date.now() });
  saveDB(db);
  showToast('ஆர்வம் வெற்றிகரமாக அனுப்பப்பட்டது!', 'success');

  const btn = document.getElementById('interestBtn-' + profileId);
  if (btn) {
    btn.innerHTML = '<i class="fas fa-heart mr-1"></i>அனுப்பப்பட்டது';
    btn.classList.add('opacity-60');
  }
}

function getInterestStatus(fromId, toId) {
  const db = getDB();
  const interest = db.interests.find(i => i.fromId === fromId && i.toId === toId);
  return interest ? interest.status : null;
}

async function toggleShortlist(profileId) {
  const currentUser = getCurrentUser();
  if (!currentUser) { openModal('login'); return; }

  try {
    const response = await fetchJSON('/api/shortlists', {
      method: 'POST',
      body: JSON.stringify({ userId: currentUser.id, profileId })
    });
    const remoteDb = await fetchJSON('/api/db');
    localStorage.setItem('kalyanaDB', JSON.stringify(remoteDb));
    showToast(response.message === 'Shortlist removed' ? 'பட்டியலிலிருந்து நீக்கப்பட்டது' : 'பட்டியலிடப்பட்டது', response.message === 'Shortlist removed' ? 'info' : 'success');
    if (!document.getElementById('page-browse').classList.contains('hidden')) renderBrowseProfiles();
    return;
  } catch (error) {
    console.warn('Backend shortlist sync failed, using local fallback:', error.message);
  }

  const db = getDB();
  const idx = db.shortlists.findIndex(s => s.userId === currentUser.id && s.profileId === profileId);
  if (idx >= 0) {
    db.shortlists.splice(idx, 1);
    saveDB(db);
    showToast('பட்டியலிலிருந்து நீக்கப்பட்டது', 'info');
  } else {
    db.shortlists.push({ userId: currentUser.id, profileId: profileId, timestamp: Date.now() });
    saveDB(db);
    showToast('பட்டியலிடப்பட்டது', 'success');
  }
  if (!document.getElementById('page-browse').classList.contains('hidden')) renderBrowseProfiles();
}

function isProfileShortlisted(profileId) {
  const currentUser = getCurrentUser();
  if (!currentUser) return false;
  const db = getDB();
  return db.shortlists.some(s => s.userId === currentUser.id && s.profileId === profileId);
}


// ==================== கட்டுப்பாட்டு பலகை ====================

function renderDashboard() {
  const user = getCurrentUser();
  if (!user) return;
  const db = getDB();

  // புள்ளிவிவரங்கள்
  const receivedCount = db.interests.filter(i => i.toId === user.id).length;
  const sentCount = db.interests.filter(i => i.fromId === user.id).length;
  document.getElementById('statInterests').textContent = receivedCount;
  document.getElementById('statSent').textContent = sentCount;
  document.getElementById('statViews').textContent = Math.floor(Math.random() * 50 + 10);
  document.getElementById('statMatches').textContent = Math.floor(Math.random() * 30 + 60);

  // சுயவிவர தகவல்
  document.getElementById('dashAvatar').src = user.avatar;
  document.getElementById('dashName').textContent = user.firstName + ' ' + user.lastName;
  const age = getAge(user.dob);
  document.getElementById('dashSubtitle').textContent = age + ' வயது, ' + user.height + ' | ' + user.occupation + ' | ' + user.city;

  const tags = [user.religion, user.education, user.maritalStatus === 'Never Married' ? 'முதல் திருமணம்' : user.maritalStatus].filter(Boolean);
  document.getElementById('dashTags').innerHTML = tags.map(t => '<span class="px-3 py-1 rounded-full bg-[var(--cream)] text-xs font-medium text-[var(--muted)]">' + t + '</span>').join('');

  const details = [
    { icon: 'fa-birthday-cake', label: 'பிறந்த தேதி', value: new Date(user.dob).toLocaleDateString('ta-IN', { day:'numeric', month:'long', year:'numeric' }) },
    { icon: 'fa-ruler-vertical', label: 'உயரம்', value: user.height || 'குறிப்பிடப்படவில்லை' },
    { icon: 'fa-pray', label: 'மதம் / சாதி', value: user.religion + (user.caste ? ' - ' + user.caste : '') },
    { icon: 'fa-language', label: 'தாய் மொழி', value: user.motherTongue || 'குறிப்பிடப்படவில்லை' },
    { icon: 'fa-graduation-cap', label: 'கல்வி', value: user.education },
    { icon: 'fa-briefcase', label: 'வேலை', value: user.occupation },
    { icon: 'fa-rupee-sign', label: 'ஆண்டு வருமானம்', value: user.income || 'குறிப்பிடப்படவில்லை' },
    { icon: 'fa-map-marker-alt', label: 'நகரம்', value: user.city },
    { icon: 'fa-envelope', label: 'மின்னஞ்சல்', value: user.email },
    { icon: 'fa-phone', label: 'தொலைபேசி', value: user.phone },
    { icon: 'fa-shield-alt', label: 'சரிபார்ப்பு', value: user.verified ? '<span class="text-green-600 font-semibold">சரிபார்க்கப்பட்டது</span>' : '<span class="text-amber-600 font-semibold">நிலுவையில்</span>' }
  ];
  document.getElementById('dashDetails').innerHTML = details.map(d => `
    <div class="flex items-start gap-3 py-3">
      <div class="w-9 h-9 rounded-lg bg-[var(--cream)] flex items-center justify-center shrink-0 mt-0.5"><i class="fas ${d.icon} text-[var(--accent)] text-sm"></i></div>
      <div><div class="text-xs text-[var(--muted)]">${d.label}</div><div class="text-sm font-semibold text-[var(--deep)]">${d.value}</div></div>
    </div>
  `).join('');

  // அனுப்பிய ஆர்வங்கள்
  const sentInterests = db.interests.filter(i => i.fromId === user.id);
  const sentList = document.getElementById('sentInterestsList');
  const noSent = document.getElementById('noSentInterests');
  if (sentInterests.length === 0) { sentList.innerHTML = ''; noSent.classList.remove('hidden'); }
  else {
    noSent.classList.add('hidden');
    sentList.innerHTML = sentInterests.map(i => {
      const p = db.users.find(u => u.id === i.toId);
      return p ? createProfileCard(p, false) : '';
    }).join('');
  }

  // பெறப்பட்ட ஆர்வங்கள்
  const receivedInterests = db.interests.filter(i => i.toId === user.id);
  const recvList = document.getElementById('receivedInterestsList');
  const noRecv = document.getElementById('noReceivedInterests');
  if (receivedInterests.length === 0) { recvList.innerHTML = ''; noRecv.classList.remove('hidden'); }
  else {
    noRecv.classList.add('hidden');
    recvList.innerHTML = receivedInterests.map(i => {
      const p = db.users.find(u => u.id === i.fromId);
      if (!p) return '';
      const card = createProfileCard(p, false);
      return card + '<div class="flex gap-2 pt-2"><button onclick="acceptInterest(' + p.id + ')" class="flex-1 py-2.5 rounded-xl bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition"><i class="fas fa-check mr-1"></i>ஏற்கு</button><button onclick="rejectInterest(' + p.id + ')" class="flex-1 py-2.5 rounded-xl border-2 border-red-200 text-red-500 text-sm font-semibold hover:bg-red-50 transition"><i class="fas fa-times mr-1"></i>நிராகரி</button></div>';
    }).join('');
  }

  // பட்டியலிடப்பட்டவை
  const shortlisted = db.shortlists.filter(s => s.userId === user.id);
  const shortList = document.getElementById('shortlistedList');
  const noShort = document.getElementById('noShortlisted');
  if (shortlisted.length === 0) { shortList.innerHTML = ''; noShort.classList.remove('hidden'); }
  else {
    noShort.classList.add('hidden');
    shortList.innerHTML = shortlisted.map(s => {
      const p = db.users.find(u => u.id === s.profileId);
      return p ? createProfileCard(p) : '';
    }).join('');
  }
}

function acceptInterest(fromId) {
  const db = getDB();
  const interest = db.interests.find(i => i.fromId === fromId && i.toId === getCurrentUser().id);
  if (interest) { interest.status = 'accepted'; saveDB(db); showToast('ஆர்வம் ஏற்றுக்கொள்ளப்பட்டது! இப்போது இணைக்கப்பட்டீர்கள்.', 'success'); renderDashboard(); }
}

function rejectInterest(fromId) {
  const db = getDB();
  const idx = db.interests.findIndex(i => i.fromId === fromId && i.toId === getCurrentUser().id);
  if (idx >= 0) { db.interests.splice(idx, 1); saveDB(db); showToast('ஆர்வம் நிராகரிக்கப்பட்டது', 'info'); renderDashboard(); }
}

function switchDashTab(tabName) {
  document.querySelectorAll('.dash-tab').forEach(t => t.classList.add('hidden'));
  document.getElementById('tab-' + tabName).classList.remove('hidden');
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('active');
    if (b.dataset.tab === tabName) b.classList.add('active');
  });
}


// ==================== சுயவிவரம் திருத்து ====================

function openEditProfile() {
  const user = getCurrentUser();
  if (!user) return;
  document.getElementById('editAbout').value = user.about || '';
  document.getElementById('editOccupation').value = user.occupation || '';
  document.getElementById('editCity').value = user.city || '';
  document.getElementById('editIncome').value = user.income || 'Below 5 LPA';
  document.getElementById('editFamily').value = user.family || '';
  openModal('editProfile');
}

function handleEditProfile(e) {
  e.preventDefault();
  const db = getDB();
  const user = db.users.find(u => u.id === getCurrentUser().id);
  if (!user) return;

  user.about = document.getElementById('editAbout').value.trim();
  user.occupation = document.getElementById('editOccupation').value.trim();
  user.city = document.getElementById('editCity').value.trim();
  user.income = document.getElementById('editIncome').value;
  user.family = document.getElementById('editFamily').value.trim();
  saveDB(db);
  closeModal('editProfile');
  renderDashboard();
  showToast('சுயவிவரம் வெற்றிகரமாக புதுப்பிக்கப்பட்டது!', 'success');
}


// ==================== வெற்றிக் கதைகள் ====================

function renderStories() {
  const grid = document.getElementById('storiesGrid');
  grid.innerHTML = SUCCESS_STORIES.map(s => `
    <div class="bg-white rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div class="relative h-52 overflow-hidden">
        <img src="${s.img}" alt="${s.name1} & ${s.name2}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-white">
          <span class="text-[var(--gold)] text-lg mb-1 block">💍</span>
          <h3 class="text-xl font-bold">${s.name1} & ${s.name2}</h3>
          <p class="text-white/70 text-sm">${s.date}</p>
        </div>
      </div>
      <div class="p-6">
        <p class="text-[var(--muted)] text-sm leading-relaxed line-clamp-4">${s.story}</p>
      </div>
    </div>
  `).join('');
}


// ==================== சிறப்பு சுயவிவரங்கள் ====================

function renderFeaturedProfiles() {
  const db = getDB();
  const featured = db.users.filter(u => u.verified).slice(0, 4);
  document.getElementById('featuredProfiles').innerHTML = featured.map(p => createProfileCard(p)).join('');
}


// ==================== ஹீரோ துகள்கள் ====================

function createHeroParticles() {
  const container = document.getElementById('heroParticles');
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.bottom = '0';
    particle.style.animationDuration = (3 + Math.random() * 4) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particle.style.width = (2 + Math.random() * 4) + 'px';
    particle.style.height = particle.style.width;
    container.appendChild(particle);
  }
}


// ==================== எண் அனிமேஷன் ====================

function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const duration = 2000;
    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(target * eased).toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}


// ==================== ஸ்க்ரால் வெளிப்படுத்தல் ====================

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


// ==================== நாவ்பார் ஸ்க்ரால் ====================

function initNavScroll() {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.style.boxShadow = window.scrollY > 50 ? '0 4px 30px rgba(0,0,0,0.08)' : 'none';
  });
}


// ==================== தொடக்கம் ====================

document.addEventListener('DOMContentLoaded', async () => {
  await bootstrapBackend();
  updateAuthUI();
  renderFeaturedProfiles();
  createHeroParticles();
  animateCounters();
  initScrollReveal();
  initNavScroll();

  // டெமோ: முதலில் முகப்பு பக்கம் திறக்கவும்
  navigateTo('home');
});