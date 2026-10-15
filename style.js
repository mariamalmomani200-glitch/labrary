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

const categories = ['الكل', 'روايات', 'رومانسي', 'غموض وتشويق', 'رعب', 'خيال علمي', 'تاريخ', 'تطوير ذات', 'علم النفس', 'أعمال وريادة', 'اقتصاد ومال', 'تقنية وبرمجة', 'علوم', 'شعر وأدب', 'دين', 'الأسرة والتربية', 'أطفال', 'تعليم', 'سفر وثقافة'];
const app = document.querySelector('#app');
const state = {
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
  return `${value.toFixed(2)} د.أ`;
}

function getShownBooks() {
  const query = state.search.trim().toLocaleLowerCase('ar');
  let result = books.filter((book) =>
    (state.category === 'الكل' || book.category === state.category)
    && (!state.favoritesOnly || state.favorites.includes(book.id))
    && (!query || `${book.title} ${book.author} ${book.category}`.toLocaleLowerCase('ar').includes(query))
  );

  if (state.sort === 'price-low') result = [...result].sort((a, b) => a.price - b.price);
  if (state.sort === 'price-high') result = [...result].sort((a, b) => b.price - a.price);
  if (state.sort === 'title') result = [...result].sort((a, b) => a.title.localeCompare(b.title, 'ar'));
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
      <h3>${noFavorites ? 'رفّك ينتظر أول اختيار' : 'لم نعثر على هذا الكتاب'}</h3>
      <p>${noFavorites ? 'اضغط على القلب بجانب أي كتاب ليبقى هنا.' : 'جرّب كلمة أخرى أو اختر قسماً مختلفاً.'}</p>
      <button class="mini-link" data-action="reset-filters">عرض كل الكتب</button>
    </div>`;
  }

  return shownBooks.map((book, index) => {
    const isFavorite = state.favorites.includes(book.id);
    return `<article class="book-card" data-testid="card-book-${book.id}" style="animation-delay:${Math.min(index * 45, 300)}ms">
      <div class="cover-shell">
        <div class="book-cover" style="background:linear-gradient(145deg,${book.colors[0]},${book.colors[1]})" role="img" aria-label="غلاف مصمم لكتاب ${escapeHtml(book.title)}">
          <span class="cover-ornament"></span><span class="cover-spine"></span><span class="cover-border"></span>
          <strong class="cover-title">${escapeHtml(book.title)}</strong><span class="cover-author">${escapeHtml(book.author)}</span>
        </div>
        ${book.badge ? `<span class="book-badge">${escapeHtml(book.badge)}</span>` : ''}
        <button class="favorite-button ${isFavorite ? 'is-favorite' : ''}" data-action="favorite" data-id="${book.id}" data-testid="button-favorite-${book.id}" aria-label="${isFavorite ? `إزالة ${escapeHtml(book.title)} من المحفوظات` : `حفظ ${escapeHtml(book.title)}`}" aria-pressed="${isFavorite}">
          ${icon('heart', 16, isFavorite ? 'fill="currentColor"' : '')}
        </button>
      </div>
      <div class="book-info">
        <h3 class="book-title" data-testid="text-book-title-${book.id}">${escapeHtml(book.title)}</h3>
        <p class="book-author">${escapeHtml(book.author)}</p>
        <div class="book-meta">
          <span class="book-price" data-testid="text-book-price-${book.id}">${formatPrice(book.price)}</span>
          <button class="add-cart" data-action="add-cart" data-id="${book.id}" data-testid="button-add-cart-${book.id}">${icon('bag', 14)} أضف للحقيبة</button>
        </div>
      </div>
    </article>`;
  }).join('');
}

function renderCart() {
  if (!state.showCart) return '';
  const cartBooks = books.filter((book) => (state.cart[book.id] || 0) > 0);
  const contents = cartBooks.length
    ? `<div class="cart-lines">${cartBooks.map((book) => `<div class="cart-line" data-testid="cart-item-${book.id}">
        <div class="cart-thumb" style="background:linear-gradient(145deg,${book.colors[0]},${book.colors[1]})">${escapeHtml(book.title)}</div>
        <div>
          <h3>${escapeHtml(book.title)}</h3><p>${formatPrice(book.price)}</p>
          <div class="quantity">
            <button data-action="decrease" data-id="${book.id}" data-testid="button-decrease-${book.id}" aria-label="تقليل كمية ${escapeHtml(book.title)}">${icon('minus', 13)}</button>
            <span data-testid="text-quantity-${book.id}">${state.cart[book.id]}</span>
            <button data-action="increase" data-id="${book.id}" data-testid="button-increase-${book.id}" aria-label="زيادة كمية ${escapeHtml(book.title)}">${icon('plus', 13)}</button>
          </div>
        </div>
        <span class="line-total">${formatPrice(book.price * state.cart[book.id])}</span>
      </div>`).join('')}</div>
      <div class="cart-total">
        <div class="total-row"><span>المجموع</span><span data-testid="text-cart-total">${formatPrice(cartTotal())}</span></div>
        <p class="demo-note">هذه حقيبة قراءة تجريبية؛ لا يوجد دفع أو طلب فعلي في هذا النموذج.</p>
      </div>`
    : `<div class="cart-empty">${icon('bag', 32)}<h3>حقيبتك تنتظر حكايتها</h3><p>أضف كتاباً من الرفوف ليظهر هنا.</p><button class="text-button" data-action="continue-shopping">تابع التصفح ${icon('left', 15)}</button></div>`;

  return `<button class="drawer-backdrop" data-action="close-cart" data-testid="button-close-cart-backdrop" aria-label="إغلاق حقيبة الكتب"></button>
    <aside class="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title" data-testid="cart-drawer">
      <div class="drawer-head">
        <h2 id="cart-title">حقيبة الكتب <span>(${cartCount()})</span></h2>
        <button class="drawer-close" data-action="close-cart" data-testid="button-close-cart" aria-label="إغلاق">${icon('close', 20)}</button>
      </div>${contents}
    </aside>`;
}

function render() {
  const favoritesLabel = state.favoritesOnly ? 'رفّك الخاص' : 'اختيرت بمحبة';
  const sectionTitle = state.favoritesOnly ? 'كتبك المحفوظة' : state.category === 'الكل' ? 'الأكثر مبيعاً' : escapeHtml(state.category);
  const sectionDescription = state.favoritesOnly ? 'كتب وضعتها جانباً لتعود إليها.' : 'حكايات تستحق أن تأخذها معك إلى البيت.';
  const favoriteCount = state.favorites.length;

  app.innerHTML = `<div class="store-shell" dir="rtl">
     <header class="topnav">
      <button class="brand" data-action="home" data-testid="link-home" aria-label="العودة إلى الرئيسية"><span class="brand-mark">${icon('book', 19)}</span><span>مكتبتي</span></button>
      <nav class="nav-links" aria-label="التنقل الرئيسي">
        <button class="nav-link active" data-action="home" data-testid="nav-home">الرئيسية</button>
        <button class="nav-link" data-action="nav-category" data-category="روايات" data-testid="nav-novels">روايات</button>
        <button class="nav-link" data-action="nav-category" data-category="تطوير ذات" data-testid="nav-self-help">تطوير ذات</button>
        <button class="nav-link" data-action="nav-category" data-category="تاريخ" data-testid="nav-history">تاريخ</button>
        <button class="nav-link" data-action="bestsellers" data-testid="nav-bestsellers">الأكثر مبيعاً</button>
      </nav>
      <div class="nav-actions">
        <button class="icon-button ${state.favoritesOnly ? 'is-favorite' : ''}" data-action="favorites-toggle" data-testid="button-favorites" aria-label="عرض الكتب المحفوظة" title="قائمتي المحفوظة">
          ${icon('heart', 18, state.favoritesOnly ? 'fill="currentColor"' : '')}${favoriteCount ? `<span class="count-badge">${favoriteCount}</span>` : ''}
        </button>
        <button class="icon-button" data-action="open-cart" data-testid="button-cart" aria-label="فتح حقيبة الكتب، ${cartCount()} كتاب" title="حقيبة الكتب">
          ${icon('bag', 18)}${cartCount() ? `<span class="count-badge">${cartCount()}</span>` : ''}
        </button>
      </div>
    </header>

    <main>
      <section class="hero" aria-label="اكتشف الكتب">
        <div class="hero-inner">
          <div class="hero-copy">
            <span class="eyebrow">مساحة صغيرة لعوالم كبيرة</span>
            <h1>اكتشف عالمك القادم<br>من القراءة</h1>
            <p>آلاف الكتب العربية والمترجمة، بأجواء خريفية دافئة تليق بفنجان شايك.</p>
            <button class="primary-cta" data-action="browse" data-testid="button-browse-books">تصفح الكتب ${icon('left', 17)}</button>
          </div>
          <div class="hero-art" aria-hidden="true">
            <div class="hero-disc"></div><div class="hero-book"><span>حكايات<br>على مهل</span><small>مكتبة المساء</small></div><div class="hero-note">كل صفحة، نافذة</div>
          </div>
        </div>
      </section>

      <div class="content-wrap">
        <div class="quick-row">
          <span class="quick-note">${icon('bookmark', 15)} كتب مختارة بعناية، من رفوفنا إلى يومك</span>
          <span class="quick-note">${icon('check', 15)} أسعارنا بالدينار الأردني</span>
        </div>
        <section class="section" id="categories">
          <div class="section-heading"><div><span class="section-kicker">رفوف مكتبتي</span><h2>تصفح حسب القسم</h2><p class="section-desc">اختر مزاج القراءة، ودعنا نقرّب لك الكتاب المناسب.</p></div></div>
          <div class="category-list" data-testid="category-list">
            ${categories.map((category) => `<button class="category-chip ${state.category === category && !state.favoritesOnly ? 'selected' : ''}" data-action="category" data-category="${escapeHtml(category)}" data-testid="category-${escapeHtml(category)}">${escapeHtml(category)}${category === 'الكل' ? `<span>${books.length}</span>` : ''}</button>`).join('')}
          </div>
        </section>
        <section class="discovery" aria-label="اقتراح قراءة">
          <div class="discovery-copy">
            <span class="discovery-label">${icon('sparkle', 15)} لحظة اكتشاف</span>
            <h3>لا تعرف ماذا تقرأ؟</h3>
            <p>اقتراح على ذوق أمين المكتبة: <strong data-testid="text-discovery-title">${escapeHtml(state.discovery.title)}</strong> — ${escapeHtml(state.discovery.blurb)}</p>
          </div>
          <button data-action="discover" data-testid="button-discover">اقترح عليّ كتاباً ${icon('left', 16)}</button>
        </section>
        <section class="section" id="books">
          <div class="section-heading">
            <div><span class="section-kicker">${favoritesLabel}</span><h2>${sectionTitle}</h2><p class="section-desc">${sectionDescription}</p></div>
            ${state.favoritesOnly ? `<button class="text-button" data-action="clear-favorites" data-testid="button-clear-favorites-filter">كل الكتب ${icon('left', 15)}</button>` : ''}
          </div>
          <div class="filter-bar">
            <label class="search-field">${icon('search', 18)}
              <input type="search" data-action="search" data-testid="input-search-books" value="${escapeHtml(state.search)}" placeholder="ابحث عن كتاب أو كاتب..." aria-label="ابحث عن كتاب أو كاتب">
            </label>
            <select class="sort-select" data-action="sort" data-testid="select-sort-books" aria-label="ترتيب الكتب">
              <option value="featured" ${state.sort === 'featured' ? 'selected' : ''}>ترتيب: مختارة</option>
              <option value="price-low" ${state.sort === 'price-low' ? 'selected' : ''}>السعر: الأقل أولاً</option>
              <option value="price-high" ${state.sort === 'price-high' ? 'selected' : ''}>السعر: الأعلى أولاً</option>
              <option value="title" ${state.sort === 'title' ? 'selected' : ''}>العنوان: أبجدياً</option>
            </select>
            <span class="result-count" data-testid="text-result-count">${getShownBooks().length} كتاب</span>
          </div>
          <div class="book-grid" data-testid="book-grid">${renderBookCards()}</div>
        </section>
        <section class="bottom-editorial">
          <div class="editorial-quote"><blockquote>«الكتاب نافذة نطل منها على العالم، ومقعد هادئ نجلس فيه مع أنفسنا.»</blockquote><cite>من دفتر أمين المكتبة</cite></div>
          <div class="editorial-aside"><span>حكاية مكتبتي</span><h3>رفوف تعرف أسماء قرّائها</h3><p>نؤمن أن لكل قارئ كتاباً ينتظره. لذلك نجمع بين الحكايات العربية التي نحبها والترجمات التي وسّعت عوالمنا.</p></div>
        </section>
      </div>
    </main>
    <footer class="footer"><span class="footer-brand">مريم المومني — مطوّرة مكتبتي </span><span>© 2026 مكتبتي · صُنعت بمحبة للقرّاء</span><span>كل كتاب بداية حكاية</span></footer>
    ${renderCart()}
    ${state.toast ? `<div class="toast-message" role="status" data-testid="status-toast">${escapeHtml(state.toast)}</div>` : ''}
  </div>`;
}

function renderBooksOnly() {
  const grid = app.querySelector('[data-testid="book-grid"]');
  const count = app.querySelector('[data-testid="text-result-count"]');
  if (grid) grid.innerHTML = renderBookCards();
  if (count) count.textContent = `${getShownBooks().length} كتاب`;
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
      showToast(state.favorites.includes(id) ? `حُفظ «${book.title}» في قائمتك` : 'أُزيل الكتاب من قائمتك');
      break;
    case 'add-cart':
      if (!book) break;
      state.cart[id] = (state.cart[id] || 0) + 1;
      saveStored('maktabati-cart', state.cart);
      showToast(`أُضيف «${book.title}» إلى حقيبتك`);
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
      showToast(`اقتراحنا لك: ${state.discovery.title}`);
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