import { artigos as articles } from "./artigos.js";

const latestArticle = document.getElementById("latest-article");
const articleGrid = document.getElementById("article-grid");

document.addEventListener("DOMContentLoaded", () => {
	// const toggleThemeButton = document.getElementById()
	fillLatestArticle();
	fillArticleGrid();
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
	articleTag.textContent = data.categoria;
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
	const newArticleCard = document.createElement("article");

	newArticleCard.classList.add("article-card");
	newArticleCard.innerHTML = `
		<img class="article-card__img" src="${data.img_url}" alt="${data.img_alt}">
		<p class="article-card__tag">${data.categoria}</p>
		<h2 class="article-card__h2">${data.titulo}</h2>
		<p class="article-card__info">Por <strong class="article-card__autor">${data.autor}</strong> | <span class="article-card__date">${data.data}</span> | <span class="article-card__read-time">${data.tempo_leitura}</span> min de leitura</p>
	`;

	return (newArticleCard);
}
