const books = [
  { id: 'alchemist', title: 'الخيميائي', author: 'باولو كويلو', price: 5.50, category: 'روايات', badge: 'الأكثر مبيعاً', colors: ['#a54e37', '#6d382e'], blurb: 'رحلة بحث عن الكنز الذي يسكننا.' },
  { id: 'zikola', title: 'أرض زيكولا', author: 'عمرو عبد الحميد', price: 3.50, category: 'خيال علمي', badge: 'اختيار القراء', colors: ['#60745f', '#354b43'], blurb: 'عالم لا يتعامل بعملته المعتادة.' },
  { id: 'miserables', title: 'البؤساء', author: 'فيكتور هيغو', price: 4.00, category: 'روايات', colors: ['#8d623f', '#513b31'], blurb: 'ملحمة إنسانية عن الرحمة والنجاة.' },
  { id: 'letters', title: 'رسائل من القرآن', author: 'أدهم شرقاوي', price: 3.50, category: 'دين', colors: ['#748167', '#3f5346'], badge: 'قراءة هادئة', blurb: 'تأملات تعيد للآيات قربها.' },
  { id: 'hebrew', title: 'في قلبي أنثى عبرية', author: 'خولة حمدي', price: 3.50, category: 'رومانسي', colors: ['#9c6658', '#633b43'], blurb: 'حكاية حب تعبر الحدود.' },
  { id: 'jartin', title: 'قواعد جارتين', author: 'عمرو عبد الحميد', price: 3.25, category: 'خيال علمي', colors: ['#77795e', '#45463c'], badge: 'جزء من سلسلة', blurb: 'مدينة تحكمها قواعد لا ترحم.' },
  { id: 'azazeel', title: 'عزازيل', author: 'يوسف زيدان', price: 3.75, category: 'تاريخ', colors: ['#a24f42', '#56352f'], blurb: 'مخطوطات من زمن الأسئلة الكبرى.' },
  { id: 'ecstasy', title: 'إكستاسي', author: 'عبدالهادي العمشان', price: 5.00, category: 'تطوير ذات', colors: ['#9a7953', '#534332'], blurb: 'خواطر عن الانتباه إلى الحياة.' },
  { id: 'men-sun', title: 'رجال في الشمس', author: 'غسان كنفاني', price: 5.75, category: 'روايات', colors: ['#b47642', '#6a4931'], badge: 'من الأدب العربي', blurb: 'رواية قصيرة عن الطريق والمنفى.' },
  { id: 'sapiens', title: 'العاقل', author: 'يوفال نوح هراري', price: 4.25, category: 'تاريخ', colors: ['#667981', '#3e4f59'], blurb: 'حكاية موجزة عن تاريخ الإنسان.' },
  { id: 'psychology', title: 'ربما عليك أن تكلم أحداً', author: 'لوري غوتليب', price: 3.50, category: 'علم النفس', colors: ['#b17b65', '#734c4a'], blurb: 'حكايات صادقة من غرفة العلاج.' },
  { id: 'little-prince', title: 'الأمير الصغير', author: 'أنطوان دو سانت إكزوبيري', price: 3.00, category: 'أطفال', colors: ['#7d8c7a', '#465b51'], blurb: 'كتاب صغير يكبر مع كل قراءة.' },
  { id: 'then-none', title: 'ثم لم يبقَ أحد', author: 'أغاثا كريستي', price: 3.25, category: 'غموض وتشويق', colors: ['#6b456e', '#30274f'], blurb: 'جزيرة معزولة، وأسرار تنكشف مع اختفاء الضيوف.' },
  { id: 'frankenstein', title: 'فرانكشتاين', author: 'ماري شيلي', price: 4.75, category: 'رعب', colors: ['#5c596f', '#23263d'], blurb: 'حكاية العالم الذي صنع مخلوقاً ثم خاف منه.' },
  { id: 'good-to-great', title: 'من جيد إلى عظيم', author: 'جيم كولينز', price: 4.00, category: 'أعمال وريادة', colors: ['#53715e', '#263f3d'], blurb: 'أفكار عن القيادة وبناء المؤسسات القادرة على الاستمرار.' },
  { id: 'rich-dad', title: 'الأب الغني والأب الفقير', author: 'روبرت كيوساكي', price: 3.75, category: 'اقتصاد ومال', colors: ['#5e667c', '#2c344d'], blurb: 'مقارنة بين عادات المال والادخار والاستثمار.' },
  { id: 'clean-code', title: 'الشفرة النظيفة', author: 'روبرت سي. مارتن', price: 5.00, category: 'تقنية وبرمجة', colors: ['#426b70', '#223d47'], blurb: 'مبادئ عملية لكتابة شيفرة أوضح وأسهل صيانة.' },
  { id: 'brief-history-time', title: 'تاريخ موجز للزمن', author: 'ستيفن هوكينغ', price: 4.00, category: 'علوم', colors: ['#50708a', '#293b55'], blurb: 'أسئلة عن الزمن والكون ونشأة النجوم.' },
  { id: 'diwan-mutannabi', title: 'ديوان المتنبي', author: 'أبو الطيب المتنبي', price: 5.75, category: 'شعر وأدب', colors: ['#956b6e', '#553547'], blurb: 'قصائد من أبرز شعر العربية في العصر العباسي.' },
  { id: 'how-to-talk-kids', title: 'كيف تتحدث فيصغي الصغار إليك', author: 'أديل فابر وإيلين مازليش', price: 3.00, category: 'الأسرة والتربية', colors: ['#b17965', '#694546'], blurb: 'أفكار للحوار الهادئ والاستماع داخل الأسرة.' },
  { id: 'learning-how-to-learn', title: 'تعلم كيف تتعلم', author: 'باربرا أوكلي وتيرينس سينوفسكي', price: 4.30, category: 'تعليم', colors: ['#71816a', '#34493e'], blurb: 'طرق عملية لفهم المعلومات وتثبيتها في الذاكرة.' },
  { id: 'ibn-battuta', title: 'رحلة ابن بطوطة', author: 'ابن بطوطة', price: 4.00, category: 'سفر وثقافة', colors: ['#b8864b', '#685031'], blurb: 'رحلة عبر مدن وشعوب وثقافات من قرون مضت.' },
];
 
/* ---------- English content ---------- */
const booksEn = {
  alchemist: { title: 'The Alchemist', author: 'Paulo Coelho', blurb: 'A journey in search of the treasure that lives within us.' },
  zikola: { title: 'Land of Zikola', author: 'Amr Abdel Hamid', blurb: 'A world that does not trade in its usual currency.' },
  miserables: { title: 'Les Misérables', author: 'Victor Hugo', blurb: 'A human epic of mercy and survival.' },
  letters: { title: 'Letters from the Quran', author: 'Adham Sharkawi', blurb: 'Reflections that bring the verses closer to the heart.' },
  hebrew: { title: 'A Hebrew Woman in My Heart', author: 'Khawla Hamdi', blurb: 'A love story that crosses borders.' },
  jartin: { title: "Jartin's Rules", author: 'Amr Abdel Hamid', blurb: 'A city governed by merciless rules.' },
  azazeel: { title: 'Azazeel', author: 'Youssef Ziedan', blurb: 'Manuscripts from an age of great questions.' },
  ecstasy: { title: 'Ecstasy', author: 'Abdulhadi Al-Omshan', blurb: 'Reflections on paying attention to life.' },
  'men-sun': { title: 'Men in the Sun', author: 'Ghassan Kanafani', blurb: 'A short novel about the road and exile.' },
  sapiens: { title: 'Sapiens', author: 'Yuval Noah Harari', blurb: 'A brief history of humankind.' },
  psychology: { title: 'Maybe You Should Talk to Someone', author: 'Lori Gottlieb', blurb: 'Honest stories from the therapy room.' },
  'little-prince': { title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', blurb: 'A small book that grows with every reading.' },
  'then-none': { title: 'And Then There Were None', author: 'Agatha Christie', blurb: 'An isolated island, and secrets that surface as the guests vanish.' },
  frankenstein: { title: 'Frankenstein', author: 'Mary Shelley', blurb: 'The tale of a scientist who made a creature, then feared it.' },
  'good-to-great': { title: 'Good to Great', author: 'Jim Collins', blurb: 'Ideas on leadership and building organizations that last.' },
  'rich-dad': { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', blurb: 'A comparison of habits around money, saving and investing.' },
  'clean-code': { title: 'Clean Code', author: 'Robert C. Martin', blurb: 'Practical principles for writing clearer, more maintainable code.' },
  'brief-history-time': { title: 'A Brief History of Time', author: 'Stephen Hawking', blurb: 'Questions about time, the universe and the birth of stars.' },
  'diwan-mutannabi': { title: 'Diwan of Al-Mutanabbi', author: 'Abu al-Tayyib al-Mutanabbi', blurb: 'Poems among the finest in Arabic from the Abbasid era.' },
  'how-to-talk-kids': { title: 'How to Talk So Kids Will Listen', author: 'Adele Faber & Elaine Mazlish', blurb: 'Ideas for calm conversation and listening within the family.' },
  'learning-how-to-learn': { title: 'Learning How to Learn', author: 'Barbara Oakley & Terrence Sejnowski', blurb: 'Practical ways to understand information and lock it into memory.' },
  'ibn-battuta': { title: 'The Travels of Ibn Battuta', author: 'Ibn Battuta', blurb: 'A journey through the cities, peoples and cultures of centuries past.' },
};
 
const categories = ['الكل', 'روايات', 'رومانسي', 'غموض وتشويق', 'رعب', 'خيال علمي', 'تاريخ', 'تطوير ذات', 'علم النفس', 'أعمال وريادة', 'اقتصاد ومال', 'تقنية وبرمجة', 'علوم', 'شعر وأدب', 'دين', 'الأسرة والتربية', 'أطفال', 'تعليم', 'سفر وثقافة'];
 
const categoryEn = {
  'الكل': 'All', 'روايات': 'Novels', 'رومانسي': 'Romance', 'غموض وتشويق': 'Mystery & Thriller', 'رعب': 'Horror',
  'خيال علمي': 'Science Fiction', 'تاريخ': 'History', 'تطوير ذات': 'Self-Development', 'علم النفس': 'Psychology',
  'أعمال وريادة': 'Business & Entrepreneurship', 'اقتصاد ومال': 'Economics & Finance', 'تقنية وبرمجة': 'Tech & Programming',
  'علوم': 'Science', 'شعر وأدب': 'Poetry & Literature', 'دين': 'Religion', 'الأسرة والتربية': 'Family & Parenting',
  'أطفال': 'Children', 'تعليم': 'Education', 'سفر وثقافة': 'Travel & Culture',
};
 
const badgeEn = {
  'الأكثر مبيعاً': 'Bestseller',
  'اختيار القراء': "Readers' Choice",
  'قراءة هادئة': 'A Quiet Read',
  'جزء من سلسلة': 'Part of a Series',
  'من الأدب العربي': 'Arabic Literature',
};
 
const ui = {
  ar: {
    docTitle: 'مكتبتي — مساحة صغيرة لعوالم كبيرة',
    brand: 'مكتبتي',
    homeAria: 'العودة إلى الرئيسية',
    mainNav: 'التنقل الرئيسي',
    navHome: 'الرئيسية', navNovels: 'روايات', navSelfHelp: 'تطوير ذات', navHistory: 'تاريخ', navBest: 'الأكثر مبيعاً',
    langButton: 'English', langAria: 'Switch to English',
    favAria: 'عرض الكتب المحفوظة', favTitle: 'قائمتي المحفوظة',
    cartTitle: 'حقيبة الكتب',
    cartAria: (n) => `فتح حقيبة الكتب، ${n} كتاب`,
    heroAria: 'اكتشف الكتب',
    heroEyebrow: 'مساحة صغيرة لعوالم كبيرة',
    heroTitle: 'اكتشف عالمك القادم<br>من القراءة',
    heroText: 'آلاف الكتب العربية والمترجمة، بأجواء خريفية دافئة تليق بفنجان شايك.',
    heroCta: 'تصفح الكتب',
    heroArtTitle: 'حكايات<br>على مهل', heroArtSmall: 'مكتبة المساء', heroNote: 'كل صفحة، نافذة',
    quick1: 'كتب مختارة بعناية، من رفوفنا إلى يومك',
    quick2: 'أسعارنا بالدينار الأردني',
    catKicker: 'رفوف مكتبتي', catTitle: 'تصفح حسب القسم', catDesc: 'اختر مزاج القراءة، ودعنا نقرّب لك الكتاب المناسب.',
    discAria: 'اقتراح قراءة', discLabel: 'لحظة اكتشاف', discTitle: 'لا تعرف ماذا تقرأ؟', discIntro: 'اقتراح على ذوق أمين المكتبة:', discBtn: 'اقترح عليّ كتاباً',
    kickerFav: 'رفّك الخاص', kickerAll: 'اختيرت بمحبة',
    titleFav: 'كتبك المحفوظة', titleBest: 'الأكثر مبيعاً',
    descFav: 'كتب وضعتها جانباً لتعود إليها.', descAll: 'حكايات تستحق أن تأخذها معك إلى البيت.',
    allBooks: 'كل الكتب',
    searchPh: 'ابحث عن كتاب أو كاتب...', searchAria: 'ابحث عن كتاب أو كاتب', sortAria: 'ترتيب الكتب',
    sortFeatured: 'ترتيب: مختارة', sortLow: 'السعر: الأقل أولاً', sortHigh: 'السعر: الأعلى أولاً', sortTitle: 'العنوان: أبجدياً',
    count: (n) => `${n} كتاب`,
    emptyFavTitle: 'رفّك ينتظر أول اختيار', emptyFavText: 'اضغط على القلب بجانب أي كتاب ليبقى هنا.',
    emptyNoneTitle: 'لم نعثر على هذا الكتاب', emptyNoneText: 'جرّب كلمة أخرى أو اختر قسماً مختلفاً.',
    showAll: 'عرض كل الكتب',
    coverAria: (title) => `غلاف مصمم لكتاب ${title}`,
    saveAria: (title) => `حفظ ${title}`, unsaveAria: (title) => `إزالة ${title} من المحفوظات`,
    addToCart: 'أضف للحقيبة',
    quote: '«الكتاب نافذة نطل منها على العالم، ومقعد هادئ نجلس فيه مع أنفسنا.»', quoteCite: 'من دفتر أمين المكتبة',
    asideLabel: 'حكاية مكتبتي', asideTitle: 'رفوف تعرف أسماء قرّائها',
    asideText: 'نؤمن أن لكل قارئ كتاباً ينتظره. لذلك نجمع بين الحكايات العربية التي نحبها والترجمات التي وسّعت عوالمنا.',
    footerDev: 'مريم المومني — مطوّرة مكتبتي ', footerCopy: '© 2026 مكتبتي · صُنعت بمحبة للقرّاء', footerTag: 'كل كتاب بداية حكاية',
    closeCartAria: 'إغلاق حقيبة الكتب', closeAria: 'إغلاق',
    decreaseAria: (title) => `تقليل كمية ${title}`, increaseAria: (title) => `زيادة كمية ${title}`,
    total: 'المجموع',
    demoNote: 'هذه حقيبة قراءة تجريبية؛ لا يوجد دفع أو طلب فعلي في هذا النموذج.',
    cartEmptyTitle: 'حقيبتك تنتظر حكايتها', cartEmptyText: 'أضف كتاباً من الرفوف ليظهر هنا.', continueShopping: 'تابع التصفح',
    toastSaved: (title) => `حُفظ «${title}» في قائمتك`, toastRemoved: 'أُزيل الكتاب من قائمتك',
    toastAdded: (title) => `أُضيف «${title}» إلى حقيبتك`, toastSuggest: (title) => `اقتراحنا لك: ${title}`,
    price: (v) => `${v.toFixed(2)} د.أ`,
  },
  en: {
    docTitle: 'Maktabati — A small space for big worlds',
    brand: 'Maktabati',
    homeAria: 'Back to home',
    mainNav: 'Main navigation',
    navHome: 'Home', navNovels: 'Novels', navSelfHelp: 'Self-Development', navHistory: 'History', navBest: 'Bestsellers',
    langButton: 'عربي', langAria: 'التبديل إلى العربية',
    favAria: 'Show saved books', favTitle: 'My saved list',
    cartTitle: 'Book bag',
    cartAria: (n) => `Open book bag, ${n} ${n === 1 ? 'book' : 'books'}`,
    heroAria: 'Discover books',
    heroEyebrow: 'A small space for big worlds',
    heroTitle: 'Discover your next<br>world of reading',
    heroText: 'Thousands of Arabic and translated books, in a warm autumn mood made for your cup of tea.',
    heroCta: 'Browse books',
    heroArtTitle: 'Stories<br>Slowly Told', heroArtSmall: 'EVENING LIBRARY', heroNote: 'Every page, a window',
    quick1: 'Carefully chosen books, from our shelves to your day',
    quick2: 'Prices in Jordanian dinars',
    catKicker: 'Our shelves', catTitle: 'Browse by category', catDesc: 'Pick your reading mood and let us bring the right book closer.',
    discAria: 'Reading suggestion', discLabel: 'A moment of discovery', discTitle: "Don't know what to read?", discIntro: "The librarian's pick:", discBtn: 'Suggest a book',
    kickerFav: 'Your own shelf', kickerAll: 'Chosen with love',
    titleFav: 'Your saved books', titleBest: 'Bestsellers',
    descFav: 'Books you set aside to come back to.', descAll: 'Stories worth taking home with you.',
    allBooks: 'All books',
    searchPh: 'Search for a book or author...', searchAria: 'Search for a book or author', sortAria: 'Sort books',
    sortFeatured: 'Sort: Featured', sortLow: 'Price: Low to high', sortHigh: 'Price: High to low', sortTitle: 'Title: A to Z',
    count: (n) => `${n} ${n === 1 ? 'book' : 'books'}`,
    emptyFavTitle: 'Your shelf is waiting for its first pick', emptyFavText: 'Tap the heart next to any book to keep it here.',
    emptyNoneTitle: "We couldn't find that book", emptyNoneText: 'Try another word or pick a different category.',
    showAll: 'Show all books',
    coverAria: (title) => `Designed cover for the book ${title}`,
    saveAria: (title) => `Save ${title}`, unsaveAria: (title) => `Remove ${title} from saved`,
    addToCart: 'Add to bag',
    quote: '“A book is a window onto the world, and a quiet seat where we sit with ourselves.”', quoteCite: "From the librarian's notebook",
    asideLabel: 'The Maktabati story', asideTitle: 'Shelves that know their readers by name',
    asideText: 'We believe every reader has a book waiting for them. That is why we bring together the Arabic stories we love and the translations that widened our worlds.',
    footerDev: 'Mariam Al-Momani — Maktabati developer ', footerCopy: '© 2026 Maktabati · Made with love for readers', footerTag: 'Every book is the start of a story',
    closeCartAria: 'Close book bag', closeAria: 'Close',
    decreaseAria: (title) => `Decrease quantity of ${title}`, increaseAria: (title) => `Increase quantity of ${title}`,
    total: 'Total',
    demoNote: 'This is a demo reading bag; no payment or real order is made in this prototype.',
    cartEmptyTitle: 'Your bag is waiting for its story', cartEmptyText: 'Add a book from the shelves and it will appear here.', continueShopping: 'Keep browsing',
    toastSaved: (title) => `“${title}” saved to your list`, toastRemoved: 'Book removed from your list',
    toastAdded: (title) => `“${title}” added to your bag`, toastSuggest: (title) => `Our suggestion: ${title}`,
    price: (v) => `JOD ${v.toFixed(2)}`,
  },
};
 
const app = document.querySelector('#app');
const storedLang = readStored('maktabati-lang', 'ar');
const state = {
  lang: storedLang === 'en' ? 'en' : 'ar',
  category: 'الكل',
  search: '',
  sort: 'featured',
  favorites: readStored('maktabati-favorites', []),
  cart: readStored('maktabati-cart', {}),
  favoritesOnly: false,
  showCart: false,
  toast: '',
  discovery: books[1],
};
let toastTimer;
 
function readStored(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}
 
function saveStored(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // The storefront remains usable if browser storage is unavailable.
  }
}
 
/* ---------- Language helpers ---------- */
function t(key, ...args) {
  const value = ui[state.lang][key];
  return typeof value === 'function' ? value(...args) : value;
}
 
// Returns the book with title / author / blurb / badge in the current language.
function L(book) {
  if (state.lang !== 'en') return book;
  return { ...book, ...booksEn[book.id], badge: book.badge ? badgeEn[book.badge] : undefined };
}
 
function catLabel(category) {
  return state.lang === 'en' ? categoryEn[category] || category : category;
}
 
function arrowIcon(size) {
  return icon(state.lang === 'en' ? 'right' : 'left', size);
}
 
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}
 
function icon(name, size = 18, extra = '') {
  const shapes = {
    book: '<path d="M12 7v14m0-14C10.5 5.7 8.7 5 6.5 5S2 5.7 2 7v13c0-1.3 2.2-2 4.5-2s4 .7 5.5 2m0-13c1.5-1.3 3.3-2 5.5-2S22 5.7 22 7v13c0-1.3-2.2-2-4.5-2s-4 .7-5.5 2"/>',
    bookmark: '<path d="M6 4.8A1.8 1.8 0 0 1 7.8 3h8.4A1.8 1.8 0 0 1 18 4.8V21l-6-3.8L6 21V4.8Z"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    left: '<path d="m15 18-6-6 6-6"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>',
    minus: '<path d="M5 12h14"/>',
    plus: '<path d="M12 5v14m-7-7h14"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    bag: '<path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',
    sparkle: '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z"/><path d="m19 14 1 2.5 2.5 1-2.5 1L19 21l-1-2.5-2.5-1 2.5-1 1-2.5Z"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>',
  };
  return `<svg ${extra} width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${shapes[name]}</svg>`;
}
 
function formatPrice(value) {
  return t('price', value);
}
 
function getShownBooks() {
  const query = state.search.trim().toLocaleLowerCase(state.lang);
  let result = books.filter((book) => {
    // Search works in both languages, whichever one is currently displayed.
    const en = booksEn[book.id];
    const haystack = `${book.title} ${book.author} ${book.category} ${en.title} ${en.author} ${categoryEn[book.category]}`.toLocaleLowerCase(state.lang);
    return (state.category === 'الكل' || book.category === state.category)
      && (!state.favoritesOnly || state.favorites.includes(book.id))
      && (!query || haystack.includes(query));
  });
 
  if (state.sort === 'price-low') result = [...result].sort((a, b) => a.price - b.price);
  if (state.sort === 'price-high') result = [...result].sort((a, b) => b.price - a.price);
  if (state.sort === 'title') result = [...result].sort((a, b) => L(a).title.localeCompare(L(b).title, state.lang));
  return result;
}
 
function cartCount() {
  return Object.values(state.cart).reduce((total, amount) => total + amount, 0);
}
 
function cartTotal() {
  return books.reduce((total, book) => total + book.price * (state.cart[book.id] || 0), 0);
}
 
function renderBookCards() {
  const shownBooks = getShownBooks();
  if (!shownBooks.length) {
    const noFavorites = state.favoritesOnly && !state.favorites.length;
    return `<div class="empty-state" data-testid="empty-books">
      ${icon('book', 30)}
      <h3>${noFavorites ? t('emptyFavTitle') : t('emptyNoneTitle')}</h3>
      <p>${noFavorites ? t('emptyFavText') : t('emptyNoneText')}</p>
      <button class="mini-link" data-action="reset-filters">${t('showAll')}</button>
    </div>`;
  }
 
  return shownBooks.map((rawBook, index) => {
    const book = L(rawBook);
    const title = escapeHtml(book.title);
    const isFavorite = state.favorites.includes(book.id);
    return `<article class="book-card" data-testid="card-book-${book.id}" style="animation-delay:${Math.min(index * 45, 300)}ms">
      <div class="cover-shell">
        <div class="book-cover" style="background:linear-gradient(145deg,${book.colors[0]},${book.colors[1]})" role="img" aria-label="${t('coverAria', title)}">
          <span class="cover-ornament"></span><span class="cover-spine"></span><span class="cover-border"></span>
          <strong class="cover-title">${title}</strong><span class="cover-author">${escapeHtml(book.author)}</span>
        </div>
        ${book.badge ? `<span class="book-badge">${escapeHtml(book.badge)}</span>` : ''}
        <button class="favorite-button ${isFavorite ? 'is-favorite' : ''}" data-action="favorite" data-id="${book.id}" data-testid="button-favorite-${book.id}" aria-label="${isFavorite ? t('unsaveAria', title) : t('saveAria', title)}" aria-pressed="${isFavorite}">
          ${icon('heart', 16, isFavorite ? 'fill="currentColor"' : '')}
        </button>
      </div>
      <div class="book-info">
        <h3 class="book-title" data-testid="text-book-title-${book.id}">${title}</h3>
        <p class="book-author">${escapeHtml(book.author)}</p>
        <div class="book-meta">
          <span class="book-price" data-testid="text-book-price-${book.id}">${formatPrice(book.price)}</span>
          <button class="add-cart" data-action="add-cart" data-id="${book.id}" data-testid="button-add-cart-${book.id}">${icon('bag', 14)} ${t('addToCart')}</button>
        </div>
      </div>
    </article>`;
  }).join('');
}
 
function renderCart() {
  if (!state.showCart) return '';
  const cartBooks = books.filter((book) => (state.cart[book.id] || 0) > 0);
  const contents = cartBooks.length
    ? `<div class="cart-lines">${cartBooks.map((rawBook) => {
      const book = L(rawBook);
      const title = escapeHtml(book.title);
      return `<div class="cart-line" data-testid="cart-item-${book.id}">
        <div class="cart-thumb" style="background:linear-gradient(145deg,${book.colors[0]},${book.colors[1]})">${title}</div>
        <div>
          <h3>${title}</h3><p>${formatPrice(book.price)}</p>
          <div class="quantity">
            <button data-action="decrease" data-id="${book.id}" data-testid="button-decrease-${book.id}" aria-label="${t('decreaseAria', title)}">${icon('minus', 13)}</button>
            <span data-testid="text-quantity-${book.id}">${state.cart[book.id]}</span>
            <button data-action="increase" data-id="${book.id}" data-testid="button-increase-${book.id}" aria-label="${t('increaseAria', title)}">${icon('plus', 13)}</button>
          </div>
        </div>
        <span class="line-total">${formatPrice(book.price * state.cart[book.id])}</span>
      </div>`;
    }).join('')}</div>
      <div class="cart-total">
        <div class="total-row"><span>${t('total')}</span><span data-testid="text-cart-total">${formatPrice(cartTotal())}</span></div>
        <p class="demo-note">${t('demoNote')}</p>
      </div>`
    : `<div class="cart-empty">${icon('bag', 32)}<h3>${t('cartEmptyTitle')}</h3><p>${t('cartEmptyText')}</p><button class="text-button" data-action="continue-shopping">${t('continueShopping')} ${arrowIcon(15)}</button></div>`;
 
  return `<button class="drawer-backdrop" data-action="close-cart" data-testid="button-close-cart-backdrop" aria-label="${t('closeCartAria')}"></button>
    <aside class="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title" data-testid="cart-drawer">
      <div class="drawer-head">
        <h2 id="cart-title">${t('cartTitle')} <span>(${cartCount()})</span></h2>
        <button class="drawer-close" data-action="close-cart" data-testid="button-close-cart" aria-label="${t('closeAria')}">${icon('close', 20)}</button>
      </div>${contents}
    </aside>`;
}
 
function render() {
  const dir = state.lang === 'en' ? 'ltr' : 'rtl';
  document.documentElement.lang = state.lang;
  document.documentElement.dir = dir;
  document.title = t('docTitle');
 
  const favoritesLabel = state.favoritesOnly ? t('kickerFav') : t('kickerAll');
  const sectionTitle = state.favoritesOnly ? t('titleFav') : state.category === 'الكل' ? t('titleBest') : escapeHtml(catLabel(state.category));
  const sectionDescription = state.favoritesOnly ? t('descFav') : t('descAll');
  const favoriteCount = state.favorites.length;
  const discovery = L(state.discovery);
 
  app.innerHTML = `<div class="store-shell" dir="${dir}">
     <header class="topnav">
      <button class="brand" data-action="home" data-testid="link-home" aria-label="${t('homeAria')}"><span class="brand-mark">${icon('book', 19)}</span><span>${t('brand')}</span></button>
      <nav class="nav-links" aria-label="${t('mainNav')}">
        <button class="nav-link active" data-action="home" data-testid="nav-home">${t('navHome')}</button>
        <button class="nav-link" data-action="nav-category" data-category="روايات" data-testid="nav-novels">${t('navNovels')}</button>
        <button class="nav-link" data-action="nav-category" data-category="تطوير ذات" data-testid="nav-self-help">${t('navSelfHelp')}</button>
        <button class="nav-link" data-action="nav-category" data-category="تاريخ" data-testid="nav-history">${t('navHistory')}</button>
        <button class="nav-link" data-action="bestsellers" data-testid="nav-bestsellers">${t('navBest')}</button>
      </nav>
      <div class="nav-actions">
        <button class="lang-button" data-action="toggle-lang" data-testid="button-language" lang="${state.lang === 'en' ? 'ar' : 'en'}" aria-label="${t('langAria')}">${t('langButton')}</button>
        <button class="icon-button ${state.favoritesOnly ? 'is-favorite' : ''}" data-action="favorites-toggle" data-testid="button-favorites" aria-label="${t('favAria')}" title="${t('favTitle')}">
          ${icon('heart', 18, state.favoritesOnly ? 'fill="currentColor"' : '')}${favoriteCount ? `<span class="count-badge">${favoriteCount}</span>` : ''}
        </button>
        <button class="icon-button" data-action="open-cart" data-testid="button-cart" aria-label="${t('cartAria', cartCount())}" title="${t('cartTitle')}">
          ${icon('bag', 18)}${cartCount() ? `<span class="count-badge">${cartCount()}</span>` : ''}
        </button>
      </div>
    </header>
 
    <main>
      <section class="hero" aria-label="${t('heroAria')}">
        <div class="hero-inner">
          <div class="hero-copy">
            <span class="eyebrow">${t('heroEyebrow')}</span>
            <h1>${t('heroTitle')}</h1>
            <p>${t('heroText')}</p>
            <button class="primary-cta" data-action="browse" data-testid="button-browse-books">${t('heroCta')} ${arrowIcon(17)}</button>
          </div>
          <div class="hero-art" aria-hidden="true">
            <div class="hero-disc"></div><div class="hero-book"><span>${t('heroArtTitle')}</span><small>${t('heroArtSmall')}</small></div><div class="hero-note">${t('heroNote')}</div>
          </div>
        </div>
      </section>
 
      <div class="content-wrap">
        <div class="quick-row">
          <span class="quick-note">${icon('bookmark', 15)} ${t('quick1')}</span>
          <span class="quick-note">${icon('check', 15)} ${t('quick2')}</span>
        </div>
        <section class="section" id="categories">
          <div class="section-heading"><div><span class="section-kicker">${t('catKicker')}</span><h2>${t('catTitle')}</h2><p class="section-desc">${t('catDesc')}</p></div></div>
          <div class="category-list" data-testid="category-list">
            ${categories.map((category) => `<button class="category-chip ${state.category === category && !state.favoritesOnly ? 'selected' : ''}" data-action="category" data-category="${escapeHtml(category)}" data-testid="category-${escapeHtml(category)}">${escapeHtml(catLabel(category))}${category === 'الكل' ? `<span>${books.length}</span>` : ''}</button>`).join('')}
          </div>
        </section>
        <section class="discovery" aria-label="${t('discAria')}">
          <div class="discovery-copy">
            <span class="discovery-label">${icon('sparkle', 15)} ${t('discLabel')}</span>
            <h3>${t('discTitle')}</h3>
            <p>${t('discIntro')} <strong data-testid="text-discovery-title">${escapeHtml(discovery.title)}</strong> — ${escapeHtml(discovery.blurb)}</p>
          </div>
          <button data-action="discover" data-testid="button-discover">${t('discBtn')} ${arrowIcon(16)}</button>
        </section>
        <section class="section" id="books">
          <div class="section-heading">
            <div><span class="section-kicker">${favoritesLabel}</span><h2>${sectionTitle}</h2><p class="section-desc">${sectionDescription}</p></div>
            ${state.favoritesOnly ? `<button class="text-button" data-action="clear-favorites" data-testid="button-clear-favorites-filter">${t('allBooks')} ${arrowIcon(15)}</button>` : ''}
          </div>
          <div class="filter-bar">
            <label class="search-field">${icon('search', 18)}
              <input type="search" data-action="search" data-testid="input-search-books" value="${escapeHtml(state.search)}" placeholder="${t('searchPh')}" aria-label="${t('searchAria')}">
            </label>
            <select class="sort-select" data-action="sort" data-testid="select-sort-books" aria-label="${t('sortAria')}">
              <option value="featured" ${state.sort === 'featured' ? 'selected' : ''}>${t('sortFeatured')}</option>
              <option value="price-low" ${state.sort === 'price-low' ? 'selected' : ''}>${t('sortLow')}</option>
              <option value="price-high" ${state.sort === 'price-high' ? 'selected' : ''}>${t('sortHigh')}</option>
              <option value="title" ${state.sort === 'title' ? 'selected' : ''}>${t('sortTitle')}</option>
            </select>
            <span class="result-count" data-testid="text-result-count">${t('count', getShownBooks().length)}</span>
          </div>
          <div class="book-grid" data-testid="book-grid">${renderBookCards()}</div>
        </section>
        <section class="bottom-editorial">
          <div class="editorial-quote"><blockquote>${t('quote')}</blockquote><cite>${t('quoteCite')}</cite></div>
          <div class="editorial-aside"><span>${t('asideLabel')}</span><h3>${t('asideTitle')}</h3><p>${t('asideText')}</p></div>
        </section>
      </div>
    </main>
    <footer class="footer"><span class="footer-brand">${t('footerDev')}</span><span>${t('footerCopy')}</span><span>${t('footerTag')}</span></footer>
    ${renderCart()}
    ${state.toast ? `<div class="toast-message" role="status" data-testid="status-toast">${escapeHtml(state.toast)}</div>` : ''}
  </div>`;
}
 
function renderBooksOnly() {
  const grid = app.querySelector('[data-testid="book-grid"]');
  const count = app.querySelector('[data-testid="text-result-count"]');
  if (grid) grid.innerHTML = renderBookCards();
  if (count) count.textContent = t('count', getShownBooks().length);
}
 
function showToast(message) {
  state.toast = message;
  window.clearTimeout(toastTimer);
  render();
  toastTimer = window.setTimeout(() => {
    state.toast = '';
    const toast = app.querySelector('[data-testid="status-toast"]');
    toast?.remove();
  }, 2300);
}
 
function scrollToSection(id) {
  requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
}
 
function changeQuantity(id, change) {
  const quantity = (state.cart[id] || 0) + change;
  if (quantity <= 0) delete state.cart[id];
  else state.cart[id] = quantity;
  saveStored('maktabati-cart', state.cart);
  render();
}
 
app.addEventListener('input', (event) => {
  if (event.target.matches('[data-action="search"]')) {
    state.search = event.target.value;
    renderBooksOnly();
  }
});
 
app.addEventListener('change', (event) => {
  if (event.target.matches('[data-action="sort"]')) {
    state.sort = event.target.value;
    renderBooksOnly();
  }
});
 
app.addEventListener('click', (event) => {
  const button = event.target.closest('[data-action]');
  if (!button) return;
 
  const { action, id, category } = button.dataset;
  const book = books.find((item) => item.id === id);
 
  switch (action) {
    case 'toggle-lang':
      state.lang = state.lang === 'ar' ? 'en' : 'ar';
      saveStored('maktabati-lang', state.lang);
      render();
      break;
    case 'home':
      state.category = 'الكل';
      state.favoritesOnly = false;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      break;
    case 'nav-category':
    case 'category':
      state.category = category;
      state.favoritesOnly = false;
      render();
      scrollToSection('books');
      break;
    case 'bestsellers':
      state.category = 'الكل';
      state.favoritesOnly = false;
      render();
      scrollToSection('books');
      break;
    case 'browse':
      scrollToSection('categories');
      break;
    case 'favorites-toggle':
      state.favoritesOnly = !state.favoritesOnly;
      state.category = 'الكل';
      render();
      scrollToSection('books');
      break;
    case 'clear-favorites':
      state.favoritesOnly = false;
      render();
      break;
    case 'favorite':
      if (!book) break;
      state.favorites = state.favorites.includes(id)
        ? state.favorites.filter((favoriteId) => favoriteId !== id)
        : [...state.favorites, id];
      saveStored('maktabati-favorites', state.favorites);
      showToast(state.favorites.includes(id) ? t('toastSaved', L(book).title) : t('toastRemoved'));
      break;
    case 'add-cart':
      if (!book) break;
      state.cart[id] = (state.cart[id] || 0) + 1;
      saveStored('maktabati-cart', state.cart);
      showToast(t('toastAdded', L(book).title));
      break;
    case 'open-cart':
      state.showCart = true;
      render();
      app.querySelector('[data-testid="button-close-cart"]')?.focus();
      break;
    case 'close-cart':
    case 'continue-shopping':
      state.showCart = false;
      render();
      break;
    case 'increase':
      changeQuantity(id, 1);
      break;
    case 'decrease':
      changeQuantity(id, -1);
      break;
    case 'discover': {
      const choices = books.filter((item) => item.id !== state.discovery.id);
      state.discovery = choices[Math.floor(Math.random() * choices.length)];
      state.category = 'الكل';
      state.favoritesOnly = false;
      render();
      showToast(t('toastSuggest', L(state.discovery).title));
      break;
    }
    case 'reset-filters':
      state.category = 'الكل';
      state.search = '';
      state.favoritesOnly = false;
      render();
      break;
  }
});
 
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && state.showCart) {
    state.showCart = false;
    render();
  }
});
 
render();
 
