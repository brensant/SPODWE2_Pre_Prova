const categorias = {
	1: {
		printName: "Tecnologia",
		symbolName: "tecnologia",
	},
	2: {
		printName: "Negócios",
		symbolName: "negocios",
	},
	3: {
		printName: "Ciência",
		symbolName: "ciencia",
	},
	4: {
		printName: "Cultura",
		symbolName: "cultura",
	},
	5: {
		printName: "Opinião",
		symbolName: "opiniao",
	}
};

const artigos = [
	{
		titulo: "Top 10 artistas de rua mais famosos de São Paulo",
		lide: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae rerum est totam earum optio ducimus aspernatur deleniti voluptas, nisi aliquam explicabo vitae libero doloribus, placeat tenetur, ab sunt sequi?  Optio illo consequatur accusantium molestias distinctio odit, est dicta quam hic repellat aut eligendi voluptate, dolor quo, reprehenderit cum quia at dolore saepe nihil.",
		categoria: 4,
		autor: "Breno Silva",
		data: "2026-09-21",
		tempo_leitura: 8,
		img_url: "../img/os-gemeos-lisboa.jpg",
		img_alt: "Grafite de Os Gêmeos em Lisboa"
	},
	{
		titulo: "Tiny Whoops: por um futuro cyberpunk menos deprimente",
		lide: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae rerum est totam earum optio ducimus aspernatur deleniti voluptas, nisi aliquam explicabo vitae libero doloribus, placeat tenetur, ab sunt sequi?  Optio illo consequatur accusantium molestias distinctio odit, est dicta quam hic repellat aut eligendi voluptate, dolor quo, reprehenderit cum quia at dolore saepe nihil.",
		categoria: 1,
		autor: "Breno Silva",
		data: "2026-09-16",
		tempo_leitura: 6,
		img_url: "../img/fpv-drone.jpg"
	},
	{
		titulo: "Como ter um hobby afeta o nosso cérebro",
		lide: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae rerum est totam earum optio ducimus aspernatur deleniti voluptas, nisi aliquam explicabo vitae libero doloribus, placeat tenetur, ab sunt sequi?  Optio illo consequatur accusantium molestias distinctio odit, est dicta quam hic repellat aut eligendi voluptate, dolor quo, reprehenderit cum quia at dolore saepe nihil.",
		categoria: 3,
		autor: "Breno Silva",
		data: "2026-09-11",
		tempo_leitura: 7,
		img_url: "../img/hobby.jpg"
	},
	{
		titulo: "Crypto-moedas: prós e contras",
		lide: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae rerum est totam earum optio ducimus aspernatur deleniti voluptas, nisi aliquam explicabo vitae libero doloribus, placeat tenetur, ab sunt sequi?  Optio illo consequatur accusantium molestias distinctio odit, est dicta quam hic repellat aut eligendi voluptate, dolor quo, reprehenderit cum quia at dolore saepe nihil.",
		categoria: 2,
		autor: "Breno Silva",
		data: "2026-09-6",
		tempo_leitura: 10,
		img_url: "../img/criptomoedas.jpg"
	},
	{
		titulo: "Por que precisamos de um grafiteiro na política institucional?",
		lide: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae rerum est totam earum optio ducimus aspernatur deleniti voluptas, nisi aliquam explicabo vitae libero doloribus, placeat tenetur, ab sunt sequi?  Optio illo consequatur accusantium molestias distinctio odit, est dicta quam hic repellat aut eligendi voluptate, dolor quo, reprehenderit cum quia at dolore saepe nihil.",
		categoria: 5,
		autor: "Breno Silva",
		data: "2026-09-1",
		tempo_leitura: 10,
		img_url: "../img/candidato.jpg"
	},
	{
		titulo: "Tutorial de migração do Windows para o Linux",
		lide: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae rerum est totam earum optio ducimus aspernatur deleniti voluptas, nisi aliquam explicabo vitae libero doloribus, placeat tenetur, ab sunt sequi?  Optio illo consequatur accusantium molestias distinctio odit, est dicta quam hic repellat aut eligendi voluptate, dolor quo, reprehenderit cum quia at dolore saepe nihil.",
		categoria: 1,
		autor: "Breno Silva",
		data: "2026-09-1",
		tempo_leitura: 15,
		img_url: "../img/linux.webp"
	},
	{
		titulo: "A evolução do Breakdance até os dias de hoje",
		lide: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae rerum est totam earum optio ducimus aspernatur deleniti voluptas, nisi aliquam explicabo vitae libero doloribus, placeat tenetur, ab sunt sequi?  Optio illo consequatur accusantium molestias distinctio odit, est dicta quam hic repellat aut eligendi voluptate, dolor quo, reprehenderit cum quia at dolore saepe nihil.",
		categoria: 4,
		autor: "Breno Silva",
		data: "2026-09-1",
		tempo_leitura: 15,
		img_url: "../img/hip-hop.jpg"
	},
	{
		titulo: "Permacultura em tempos de crise climática",
		lide: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae rerum est totam earum optio ducimus aspernatur deleniti voluptas, nisi aliquam explicabo vitae libero doloribus, placeat tenetur, ab sunt sequi?  Optio illo consequatur accusantium molestias distinctio odit, est dicta quam hic repellat aut eligendi voluptate, dolor quo, reprehenderit cum quia at dolore saepe nihil.",
		categoria: 3,
		autor: "Breno Silva",
		data: "2026-09-1",
		tempo_leitura: 15,
		img_url: "../img/permacultura.jpg"
	},
]

export {categorias, artigos};
