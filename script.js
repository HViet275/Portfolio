document.addEventListener("DOMContentLoaded", () => {
  const projectsData = [
    {
      id: "credit-scoring-system",
      domain: "Risk Analytics / Fintech",
      title: "Credit Scoring System",
      shortDescription:
        "Stage-aware credit scoring app with risk routing, policy rules, and interpretable lending decisions.",
      hoverDescription:
        "An end-to-end credit scoring system that routes applicants by risk stage and returns scores, decisions, loan suggestions, and reason codes.",
      summary:
        "This project is an end-to-end credit risk system built to support lending decisions through a stage-aware machine learning and policy pipeline. Instead of using one single model for all applicants, it routes customers into different risk stages and applies tailored scoring logic for each group.",
      problem:
        "A single scoring model often misses the difference between new-to-bank customers, thin-file customers, and applicants with delinquency signals. The goal was to build a more practical system that could score applicants more fairly, support business rules, and return decisions that risk teams can actually use.",
      analysisPoints: [
        "Designed a stage-aware routing system for A, B, and C customer groups",
        "Built stage-specific feature pipelines and trained separate risk models",
        "Converted model probabilities into a 300–900 score for easier business interpretation",
        "Applied policy thresholds to recommend approve, review, reject, or starter-loan actions",
        "Integrated reason codes, loan tenor suggestions, and limit recommendations into a Streamlit app"
      ],
      metrics: [
        "Risk Score",
        "Default Probability",
        "Approval / Review Rate",
        "Reject Rate",
        "Policy Threshold",
        "Reason Codes"
      ],
      tools: ["Python", "Polars", "Scikit-learn", "Jupyter", "Streamlit"],
      insight:
        "The strongest value of this project was not only predicting risk, but turning model output into operational decisions. By separating customers into business-relevant stages, the system becomes more interpretable and more usable for real lending workflows.",
      link: "https://github.com/HViet275/Credit-Scoring",
      linkLabel: "View Project on GitHub",
      image: "images/credit-scoring.png",
      placeholder: "Credit Scoring"
    },
    {
      id: "nft-realtime-dashboard",
      domain: "Market Analytics / Real-Time Monitoring",
      title: "Real-Time NFT Dashboard",
      shortDescription:
        "Minute-level NFT market dashboard with live monitoring and email alerts for important market changes.",
      hoverDescription:
        "A real-time dashboard for monitoring NFT market movement and sending alert emails when tracked market conditions change.",
      summary:
        "This project focuses on real-time NFT market monitoring through a dashboard designed for fast-changing conditions. It tracks selected assets in near real time and supports alerting workflows so users can react quickly when the market moves.",
      problem:
        "Manual dashboard checking is inefficient when prices and market conditions change quickly. The goal was to create a monitoring view that makes short-interval movements visible and adds email alerts when important changes happen.",
      analysisPoints: [
        "Built a dashboard for real-time NFT market monitoring",
        "Configured short-interval views for fast-changing market signals",
        "Tracked selected trading pairs such as ETH-USDT",
        "Added alert logic to notify users by email when market conditions change",
        "Focused on making monitoring more actionable instead of purely descriptive"
      ],
      metrics: [
        "Real-Time Price",
        "Market Change",
        "Monitoring Interval",
        "Alert Trigger",
        "Asset Pair",
        "Email Notification"
      ],
      tools: ["Grafana", "SQL", "Python", "Email Alerting"],
      insight:
        "The main value of this project is speed to reaction. A monitoring dashboard becomes much more useful when it is paired with alerting logic, because users do not need to watch the screen continuously to catch important market moves.",
      link: "https://susanna-uninstructible-aditya.ngrok-free.dev/d/ad4722w/okx-dashboard?orgId=1&from=2026-03-15T10:44:45.954Z&to=2026-03-15T12:46:07.188Z&timezone=browser&var-interval=minute&var-nft=ETH-USDT",
      linkLabel: "Open Live Dashboard",
      image: "images/real-time-nft.png",
      placeholder: "NFT Dashboard"
    },
    {
      id: "customer-clustering",
      domain: "Customer Analytics",
      title: "Customer Clustering",
      shortDescription:
        "Customer segmentation with clustering to support targeted marketing and recommendation strategies.",
      hoverDescription:
        "A customer analytics project that groups customers by purchasing behavior and supports product recommendation ideas by segment.",
      summary:
        "This project focuses on customer segmentation using clustering techniques to identify distinct groups based on purchasing behavior, transaction patterns, and engagement signals. The analysis is designed to support more targeted marketing and better customer understanding.",
      problem:
        "Businesses often treat all customers as one group, which makes it hard to personalize campaigns or understand meaningful behavior differences. The goal was to discover natural customer segments and translate them into practical business actions.",
      analysisPoints: [
        "Performed data cleaning and exploratory analysis on transactional customer data",
        "Engineered behavioral features to better represent customer activity",
        "Applied K-Means and Agglomerative Clustering to compare segmentation quality",
        "Evaluated clusters using silhouette, Calinski-Harabasz, and Davies-Bouldin metrics",
        "Extended the project toward segment-based product recommendation"
      ],
      metrics: [
        "Customer Segments",
        "Silhouette Score",
        "Calinski-Harabasz Score",
        "Davies-Bouldin Score",
        "Segment Distribution",
        "Top Products by Cluster"
      ],
      tools: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Plotly"],
      insight:
        "The most useful result was not just splitting customers into groups, but understanding how each segment behaves differently so that promotions, recommendations, and lifecycle strategies can be more targeted.",
      link: "https://github.com/HViet275/Clustering-Customer",
      linkLabel: "View Project on GitHub",
      image: "images/clustering_customer.png",
      placeholder: "Customer Clustering"
    },
    {
      id: "recommendation-system",
      domain: "Machine Learning / Personalization",
      title: "Book Recommendation System",
      shortDescription:
        "Collaborative filtering recommender system that suggests similar books based on user interest.",
      hoverDescription:
        "A Streamlit-based recommendation system that uses collaborative filtering and nearest neighbors to suggest books users may like.",
      summary:
        "This project is a collaborative filtering recommendation system built to suggest books based on user interest and interaction similarity. It turns recommendation logic into an interactive Streamlit application so users can explore similar books in a simple interface.",
      problem:
        "Users face too many choices and need help finding relevant content quickly. The goal was to build a recommendation engine that can surface similar books based on behavioral patterns rather than manual browsing alone.",
      analysisPoints: [
        "Built a collaborative filtering recommendation pipeline for books",
        "Used Nearest Neighbors to identify similar items from user-item patterns",
        "Prepared and transformed rating-based data for recommendation use",
        "Packaged the logic into an interactive Streamlit application",
        "Designed the system to return personalized and relevant suggestions"
      ],
      metrics: [
        "Nearest Neighbors",
        "User-Item Similarity",
        "Recommended Books",
        "Top-K Results",
        "Interaction Patterns"
      ],
      tools: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
      insight:
        "The project shows how a relatively simple collaborative filtering approach can still create a practical and useful user experience when paired with clean interaction logic and an easy-to-use interface.",
      link: "https://github.com/HViet275/Recommendation_system",
      linkLabel: "View Project on GitHub",
      image: "images/recommend.png",
      placeholder: "Recommendation System"
    },
    {
  id: "journey-performance-attribution",
  domain: "Marketing Analytics / Attribution",
  title: "Journey Performance Attribution for Credit Card & Loan Campaigns",
  shortDescription:
    "Cross-channel attribution dashboard that measures how mail, Zalo, website impression, and website click touchpoints contribute to Credit Card and Loan conversions.",
  hoverDescription:
    "A BigQuery and Looker Studio project that builds journey attribution logic across multiple touchpoints and links them to both app and offline conversions.",
  summary:
    "This project is an end-to-end journey performance attribution solution built for Credit Card and Loan campaigns. It connects user touchpoints across mail, Zalo, website impression, and website click channels to downstream conversions, then visualizes campaign, channel, and segment performance through an interactive dashboard.",
  problem:
    "Marketing teams often see delivery, open, and click metrics, but still lack a clear view of which touchpoints truly contribute to conversion. The goal was to design an attribution framework that can measure channel contribution, compare product journeys, and support better evaluation of campaign effectiveness across both app and offline conversion flows.",
  analysisPoints: [
    "Built attribution logic with channel-specific conversion windows for mail, Zalo, website impression, and website click touchpoints",
    "Applied priority-based touchpoint selection to assign conversion credit consistently across overlapping user journeys",
    "Linked campaign journeys to both app and offline conversions for Credit Card and Loan products",
    "Created event-level and user-level performance metrics to evaluate campaign effectiveness from multiple perspectives",
    "Designed dashboard views for overview, attribution performance, and segment insights to support business storytelling and decision-making"
  ],
  metrics: [
    "Attributed Conversions",
    "User-level CR",
    "Event-level CR",
    "App Share",
    "Avg Days to Convert",
    "Attributed Conversions by Touchpoint",
    "Segment Performance"
  ],
  tools: ["BigQuery", "SQL", "Looker Studio", "Python"],
  insight:
    "The project shows how rule-based attribution can turn fragmented campaign touchpoints into a structured decision-making view, helping teams understand which channels, segments, and product journeys are actually driving conversion rather than just generating engagement.",
  link: "YOUR_DASHBOARD_LINK",
  linkLabel: "View Dashboard",
  image: "images/jn_performance.png",
  placeholder: "Journey Performance Attribution"
}
  ];

  const projectsGrid = document.getElementById("projects-grid");
  const hoverPopup = document.getElementById("project-hover-popup");

  const modal = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalImage = document.getElementById("modal-image");
  const modalImagePlaceholder = document.getElementById("modal-image-placeholder");
  const modalDomain = document.getElementById("modal-domain");
  const modalTitle = document.getElementById("modal-title");
  const modalSummary = document.getElementById("modal-summary");
  const modalProblem = document.getElementById("modal-problem");
  const modalAnalysisList = document.getElementById("modal-analysis-list");
  const modalMetrics = document.getElementById("modal-metrics");
  const modalTools = document.getElementById("modal-tools");
  const modalLink = document.getElementById("modal-link");
  const modalInsight = document.getElementById("modal-insight");

  let activeCard = null;
  let hideTimer = null;

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function getProjectById(projectId) {
    return projectsData.find((project) => project.id === projectId);
  }

  function clearHideTimer() {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
  }

  function createTags(items = []) {
    return items
      .map((item) => `<span class="tag">${escapeHtml(item)}</span>`)
      .join("");
  }

  function renderProjects() {
    if (!projectsGrid) return;

    const html = projectsData
      .map((project) => {
        const mediaHtml = project.image
          ? `
            <img
              src="${project.image}"
              alt="${escapeHtml(project.title)}"
              class="project-image"
              loading="lazy"
              onerror="this.style.display='none'; this.nextElementSibling?.classList.remove('hidden');"
            />
            <div class="project-image-placeholder hidden">
              <span>${escapeHtml(project.placeholder || project.domain)}</span>
            </div>
          `
          : `
            <div class="project-image-placeholder">
              <span>${escapeHtml(project.placeholder || project.domain)}</span>
            </div>
          `;

        return `
          <article
            class="project-card"
            data-project-id="${escapeHtml(project.id)}"
            tabindex="0"
            role="button"
            aria-label="Open details for ${escapeHtml(project.title)}"
          >
            ${mediaHtml}
            <div class="project-content">
              <div class="project-meta">${escapeHtml(project.domain)}</div>
              <h3 class="project-title">${escapeHtml(project.title)}</h3>
              <p class="project-desc">${escapeHtml(project.shortDescription)}</p>
              <span class="project-link">Hover to preview • Click to view details</span>
            </div>
          </article>
        `;
      })
      .join("");

    projectsGrid.innerHTML = html;
  }

  function positionPopup(card) {
    if (!hoverPopup || !card) return;

    const rect = card.getBoundingClientRect();
    const popupWidth = hoverPopup.offsetWidth || 320;
    const popupHeight = hoverPopup.offsetHeight || 160;
    const gap = 14;

    let left = rect.left + window.scrollX + rect.width / 2 - popupWidth / 2;
    let top = rect.bottom + window.scrollY + gap;

    const minLeft = window.scrollX + 12;
    const maxLeft = window.scrollX + window.innerWidth - popupWidth - 12;
    left = Math.max(minLeft, Math.min(left, maxLeft));

    const viewportBottom = window.scrollY + window.innerHeight;
    if (top + popupHeight > viewportBottom - 12) {
      top = rect.top + window.scrollY - popupHeight - gap;
    }

    hoverPopup.style.left = `${left}px`;
    hoverPopup.style.top = `${top}px`;
  }

  function showHoverPopup(card) {
    if (!hoverPopup || window.innerWidth <= 640) return;

    const projectId = card.dataset.projectId;
    const project = getProjectById(projectId);
    if (!project) return;

    activeCard = card;

    hoverPopup.innerHTML = `
      <div class="hover-popup-label">${escapeHtml(project.domain)}</div>
      <div class="hover-popup-title">${escapeHtml(project.title)}</div>
      <div class="hover-popup-desc">${escapeHtml(project.hoverDescription)}</div>
    `;

    hoverPopup.classList.add("show");
    positionPopup(card);
  }

  function hideHoverPopup() {
    if (!hoverPopup) return;
    hoverPopup.classList.remove("show");
    activeCard = null;
  }

  function scheduleHideHoverPopup() {
    clearHideTimer();
    hideTimer = setTimeout(() => {
      const cardHovered = activeCard && activeCard.matches(":hover");
      const popupHovered = hoverPopup && hoverPopup.matches(":hover");

      if (!cardHovered && !popupHovered) {
        hideHoverPopup();
      }
    }, 220);
  }

  function openModal(projectId) {
    if (!modal) return;

    const project = getProjectById(projectId);
    if (!project) return;

    if (modalDomain) modalDomain.textContent = project.domain;
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalSummary) modalSummary.textContent = project.summary;
    if (modalProblem) modalProblem.textContent = project.problem;
    if (modalInsight) modalInsight.textContent = project.insight;

    if (modalAnalysisList) {
      modalAnalysisList.innerHTML = project.analysisPoints
        .map((point) => `<li>${escapeHtml(point)}</li>`)
        .join("");
    }

    if (modalMetrics) modalMetrics.innerHTML = createTags(project.metrics);
    if (modalTools) modalTools.innerHTML = createTags(project.tools);

    if (modalLink) {
      if (project.link) {
        modalLink.href = project.link;
        modalLink.textContent = project.linkLabel || "View Project";
        modalLink.style.display = "inline-flex";
        modalLink.target = "_blank";
        modalLink.rel = "noopener noreferrer";
      } else {
        modalLink.style.display = "none";
      }
    }

    if (modalImage && modalImagePlaceholder) {
      if (project.image) {
        modalImage.src = project.image;
        modalImage.alt = project.title;
        modalImage.classList.remove("hidden");
        modalImagePlaceholder.classList.add("hidden");
        modalImage.onerror = () => {
          modalImage.classList.add("hidden");
          modalImagePlaceholder.classList.remove("hidden");
          modalImagePlaceholder.textContent = project.placeholder || project.domain;
        };
      } else {
        modalImage.src = "";
        modalImage.alt = "";
        modalImage.classList.add("hidden");
        modalImagePlaceholder.classList.remove("hidden");
        modalImagePlaceholder.textContent = project.placeholder || project.domain;
      }
    }

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    hideHoverPopup();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  function attachProjectEvents() {
    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        clearHideTimer();
        showHoverPopup(card);
      });

      card.addEventListener("mouseleave", () => {
        scheduleHideHoverPopup();
      });

      card.addEventListener("mousemove", () => {
        if (hoverPopup && hoverPopup.classList.contains("show")) {
          positionPopup(card);
        }
      });

      card.addEventListener("focus", () => {
        showHoverPopup(card);
      });

      card.addEventListener("blur", () => {
        scheduleHideHoverPopup();
      });

      card.addEventListener("click", () => {
        openModal(card.dataset.projectId);
      });

      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openModal(card.dataset.projectId);
        }
      });
    });
  }

  if (hoverPopup) {
    hoverPopup.addEventListener("mouseenter", () => {
      clearHideTimer();
    });

    hoverPopup.addEventListener("mouseleave", () => {
      scheduleHideHoverPopup();
    });
  }

  if (modal) {
    modal.addEventListener("click", (event) => {
      const closeTrigger = event.target.closest("[data-close-modal='true']");
      if (closeTrigger) {
        closeModal();
      }
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal && modal.classList.contains("show")) {
      closeModal();
    }
  });

  window.addEventListener("scroll", () => {
    if (activeCard && hoverPopup && hoverPopup.classList.contains("show")) {
      positionPopup(activeCard);
    }
  });

  window.addEventListener("resize", () => {
    if (activeCard && hoverPopup && hoverPopup.classList.contains("show")) {
      positionPopup(activeCard);
    }
  });

  renderProjects();
  attachProjectEvents();
});