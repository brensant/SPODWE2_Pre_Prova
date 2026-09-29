import { artigos as articles, categorias, categorias as tags } from "./artigos.js";

const latestArticle = document.getElementById("latest-article");
const articleGrid = document.getElementById("article-grid");
const filters = document.getElementById("filters");
const themeToggle = document.getElementById("theme-toggle");

let selectedTag = "all";

document.addEventListener("DOMContentLoaded", () => {
	fillLatestArticle();
	fillArticleGrid();
	setupFilters();
	setupTheme();
	updateDateTime();
	setInterval(updateDateTime, 1000);
});

function fillLatestArticle() {
	const la = latestArticle;

	const articleImg = la.querySelector(".latest-article__img");
	const articleTag = la.querySelector(".latest-article__tag");
	const articleTitle = la.querySelector(".latest-article__h2");
	const articleAutor = la.querySelector(".latest-article__autor");
	const articleDate = la.querySelector(".latest-article__date");
	const articleReadTime = la.querySelector(".latest-article__read-time");
	const articleText = la.querySelector(".latest-article__text");

	const data = articles[0];

	articleImg.src = data.img_url;
	articleImg.alt = data.img_alt;
	articleTag.textContent = getTagName(data.categoria);
	articleTag.classList.add(`tag-${getTagSymbol(data.categoria)}`)
	articleTitle.textContent = data.titulo;
	articleAutor.textContent = data.autor;
	articleDate.textContent = data.data;
	articleReadTime.textContent = data.tempo_leitura;
	articleText.textContent = data.lide;
}

function fillArticleGrid() {
	articles.forEach((article) => {
		articleGrid.append(createArticleCard(article));
	});
}

function createArticleCard(data) {
	const newArticleCard = document.createElement("a");

	newArticleCard.href = "";
	newArticleCard.classList.add("article-card");
	newArticleCard.dataset.category = data.categoria;
	newArticleCard.innerHTML = `
		<img class="article-card__img" src="${data.img_url}" alt="${data.img_alt}">
		<p class="article-card__tag tag tag-${getTagSymbol(data.categoria)}">${getTagName(data.categoria)}</p>
		<h2 class="article-card__h2">${data.titulo}</h2>
		<p class="article-card__info">Por
			<strong class="article-card__autor">${data.autor}</strong> |
			<span class="article-card__date">${data.data}</span> |
			<span class="article-card__read-time">${data.tempo_leitura}</span>
			min de leitura
		</p>
	`;

	return (newArticleCard);
}

function getTagName(tagNumber) {
	return (tags[tagNumber].printName);
}

function getTagSymbol(tagNumber) {
	return (tags[tagNumber].symbolName);
}

function setupFilters() {
	filters.addEventListener("click", (event) => {
		const button = event.target.closest(".filters-tag");

		if (!button)
			return;

		selectedTag = button.dataset.category;

		updateFilterAppearence();
		filterArticles();
	});
}

function updateFilterAppearence() {
	const buttons = filters.querySelectorAll(".filters-tag");

	buttons.forEach((button) => {
		const isActive = button.dataset.category === selectedTag;

		button.classList.toggle("is-active", isActive);
		button.setAttribute("aria-pressed", isActive);
	});
}

function filterArticles() {
	const cards = articleGrid.querySelectorAll(".article-card");

	cards.forEach((card) => {
		const doesMatchCategory = (selectedTag === "all"
			|| card.dataset.category === selectedTag);

		card.hidden = !doesMatchCategory;
	});
}

function updateDateTime() {
	const now = new Date();

	const dateElement = document.getElementById("date");
	const timeElement = document.getElementById("time");

	const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
		day: "2-digit",
		month: "short",
		year: "numeric"
	});

	const timeFormatter = new Intl.DateTimeFormat("pt-BR", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false
	});

	dateElement.textContent = dateFormatter.format(now);
	timeElement.textContent = timeFormatter.format(now);
}

function setupTheme() {
	const savedTheme = localStorage.getItem("theme");

	const initialTheme = savedTheme ?? "light";

	setTheme(initialTheme);

	themeToggle.addEventListener("click", toggleTheme)
}

function setTheme(theme) {
	document.documentElement.dataset.theme = theme;

	const isDark = (theme === "dark");

	themeToggle.setAttribute("aria-label", isDark ? "Ativar tema claro" : "Ativar tema escuro");
	themeToggle.style.backgroundImage = `url(../img/${isDark ? "light" : "dark"}_mode.svg)`;
}

function toggleTheme() {
	const currentTheme = document.documentElement.dataset.theme;
	const newTheme = (currentTheme === "dark") ? "light" : "dark";

	setTheme(newTheme);

	localStorage.setItem("theme", newTheme);
}
