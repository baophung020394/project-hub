
import { loadHeader } from './header/index.js';
import { loadBanner } from './banner/index.js';
import { loadProfileCard } from './profile-card/index.js';
import { loadSearchInput } from './search-input/index.js';
import { loadTabs } from './tabs/index.js';
import { loadFilter } from './filter/index.js';
import { loadPagination } from './pagination/index.js';
import { loadFooter } from './footer/index.js';

// Gọi hàm để tải các component
loadHeader();
loadBanner();
loadSearchInput();
loadTabs(); // Gọi hàm loadTabs để tải tabs và profile card
loadFilter();
loadPagination();
loadProfileCard();
loadFooter();
