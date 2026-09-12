(function () {
  const posts = [...window.BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
  const state = { tag: "all", query: "" };

  const views = [...document.querySelectorAll(".view")];
  const navLinks = [...document.querySelectorAll("[data-route]")];
  const pinnedContainer = document.querySelector("#pinned-posts");
  const postList = document.querySelector("#post-list");
  const filters = document.querySelector("#tag-filters");
  const emptyState = document.querySelector("#empty-state");
  const searchInput = document.querySelector("#post-search");

  const escapeHtml = (value) =>
    String(value).replace(/[&<>'"]/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    })[character]);

  const formatDate = (date, options = {}) =>
    new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
      ...options,
    }).format(new Date(`${date}T00:00:00Z`));

  const tagsMarkup = (tags) =>
    tags.map((tag) => `<span class="post-tag">#${escapeHtml(tag)}</span>`).join("");

  function renderPinned() {
    const pinnedPosts = posts.filter((post) => post.pinned).slice(0, 2);
    pinnedContainer.innerHTML = pinnedPosts
      .map(
        (post, index) => `
          <a class="selected-card" href="#/post/${encodeURIComponent(post.id)}">
            <div class="card-number">0${index + 1}</div>
            <div class="card-content">
              <div class="card-title">
                <div class="tag-row">${tagsMarkup(post.tags)}</div>
                <h3>${escapeHtml(post.title)}</h3>
                <p>${escapeHtml(post.excerpt)}</p>
              </div>
              <div class="card-meta">
                <time datetime="${post.date}">${formatDate(post.date)}</time>
                <span>${escapeHtml(post.readingTime)}</span>
              </div>
              <span class="card-arrow" aria-hidden="true">↗</span>
            </div>
          </a>
        `,
      )
      .join("");
  }

  function renderFilters() {
    const tagCounts = posts.flatMap((post) => post.tags).reduce((counts, tag) => {
      counts[tag] = (counts[tag] || 0) + 1;
      return counts;
    }, {});
    const recurringTags = Object.entries(tagCounts)
      .filter(([, count]) => count > 1)
      .sort(([tagA], [tagB]) => tagA.localeCompare(tagB))
      .map(([tag]) => tag);

    filters.innerHTML = ["all", ...recurringTags]
      .map(
        (tag) => `
          <button type="button" class="filter-chip${state.tag === tag ? " is-active" : ""}" data-tag="${escapeHtml(tag)}">
            ${tag === "all" ? "All" : escapeHtml(tag)}
          </button>
        `,
      )
      .join("");
  }

  function renderPosts() {
    const query = state.query.trim().toLowerCase();
    const visiblePosts = posts.filter((post) => {
      const matchesTag = state.tag === "all" || post.tags.includes(state.tag);
      const searchable = [post.title, post.excerpt, ...post.tags].join(" ").toLowerCase();
      return matchesTag && (!query || searchable.includes(query));
    });

    postList.innerHTML = visiblePosts
      .map(
        (post) => `
          <a class="post-row" href="#/post/${encodeURIComponent(post.id)}">
            <div class="post-summary">
              <div class="tag-row">${tagsMarkup(post.tags)}</div>
              <h3>${escapeHtml(post.title)}</h3>
              <p>${escapeHtml(post.excerpt)}</p>
            </div>
            <time datetime="${post.date}">
              <strong>${formatDate(post.date, { month: "short", day: "2-digit", year: undefined })}</strong>
              <span>${escapeHtml(post.readingTime)}</span>
            </time>
            <span class="row-arrow" aria-hidden="true">↗</span>
          </a>
        `,
      )
      .join("");

    emptyState.hidden = visiblePosts.length !== 0;
  }

  function renderArchive() {
    const groups = posts.reduce((years, post) => {
      const year = post.date.slice(0, 4);
      (years[year] ||= []).push(post);
      return years;
    }, {});

    document.querySelector("#archive-timeline").innerHTML = Object.entries(groups)
      .sort(([yearA], [yearB]) => yearB.localeCompare(yearA))
      .map(
        ([year, yearPosts]) => `
          <section class="timeline-year">
            <div class="year-marker"><span>${year}</span></div>
            <div class="year-posts">
              ${yearPosts
                .map(
                  (post) => `
                    <a href="#/post/${encodeURIComponent(post.id)}" class="timeline-entry">
                      <time datetime="${post.date}">${formatDate(post.date, { month: "short", day: "2-digit", year: undefined })}</time>
                      <div>
                        <h2>${escapeHtml(post.title)}</h2>
                        <div class="tag-row">${tagsMarkup(post.tags)}</div>
                      </div>
                      <span aria-hidden="true">↗</span>
                    </a>
                  `,
                )
                .join("")}
            </div>
          </section>
        `,
      )
      .join("");
  }

  function showView(viewName) {
    views.forEach((view) => {
      view.hidden = view.dataset.view !== viewName;
    });
    navLinks.forEach((link) => {
      const active = link.dataset.route === viewName;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    document.body.dataset.page = viewName;
  }

  function showArticle(post) {
    document.querySelector("#article-title").textContent = post.title;
    document.querySelector("#article-excerpt").textContent = post.excerpt;
    document.querySelector("#article-date").textContent = formatDate(post.date);
    document.querySelector("#article-reading-time").textContent = post.readingTime;
    document.querySelector("#article-tags").innerHTML = tagsMarkup(post.tags);
    document.querySelector("#article-body").innerHTML = post.body;
    document.title = `${post.title} — Philopatrick`;
    showView("article");
  }

  function route() {
    const routeValue = location.hash.replace(/^#\/?/, "") || "home";
    const [segment, postId] = routeValue.split("/");

    if (segment === "post" && postId) {
      const post = posts.find((item) => item.id === decodeURIComponent(postId));
      if (post) showArticle(post);
      else {
        location.hash = "#/";
        return;
      }
    } else if (segment === "archive") {
      showView("archive");
      document.title = "Archive — Philopatrick";
    } else if (segment === "about") {
      showView("about");
      document.title = "About — Philopatrick";
    } else {
      showView("home");
      document.title = "Philopatrick — A quiet record of thought";
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-tag]");
    if (!button) return;
    state.tag = button.dataset.tag;
    renderFilters();
    renderPosts();
  });

  searchInput.addEventListener("input", () => {
    state.query = searchInput.value;
    renderPosts();
  });

  document.querySelector(".theme-toggle").addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try { localStorage.setItem("theme", nextTheme); } catch (_) {}
  });

  window.addEventListener("hashchange", route);
  document.querySelector("#current-year").textContent = new Date().getFullYear();

  renderPinned();
  renderFilters();
  renderPosts();
  renderArchive();
  route();
})();
