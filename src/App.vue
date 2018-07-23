<template>
  <div id="app">
    <div class="container" align="center">
      <img src="./assets/logo.png" class="main-logo">
      <br>
      <div class="content" id="intro-text">
      	<h3 class="title">Andre Sion's music collection. <br><br>Album art's are taken from <span id="genius-link">Genius</span>. Rating's are based on total songs I liked on the Album/EP.</h3>
      </div>
      <br>
      <div class="columns">
      	<div class="column" v-for="collection in collections3">
      		<img :src="collection.art" :alt="collection.title" class="collection-image">
      		<h3 class="title is-6 collection-title">{{ collection.title }}</h3>
      		<h6 class="subtitle is-6 collection-release-date">{{ collection.date }}</h6>
      		<h6 class="subtitle is-6">{{ collection.artist }} | <span class="tag is-rounded is-dark">{{ collection.rating }}</span></h6>
      		<a class="button is-warning is-medium is-rounded is-focused has-text-weight-light" :href="collection.link" target="_blank">View on Genius</a>
      	</div>
      </div>
      <br>
      <div class="columns">
      	<div class="column" v-for="collection in collections2">
      		<img :src="collection.art" :alt="collection.title" class="collection-image">
      		<h3 class="title is-6 collection-title">{{ collection.title }}</h3>
      		<h6 class="subtitle is-6 collection-release-date">{{ collection.date }}</h6>
      		<h6 class="subtitle is-6">{{ collection.artist }} | <span class="tag is-rounded is-dark">{{ collection.rating }}</span></h6>
      		<a class="button is-warning is-medium is-rounded is-focused has-text-weight-light" :href="collection.link" target="_blank">View on Genius</a>
      	</div>
      </div>
      <br>
      <div class="columns">
      	<div class="column" v-for="collection in collections1">
      		<img :src="collection.art" :alt="collection.title" class="collection-image">
      		<h3 class="title is-6 collection-title">{{ collection.title }}</h3>
      		<h6 class="subtitle is-6 collection-release-date">{{ collection.date }}</h6>
      		<h6 class="subtitle is-6">{{ collection.artist }} | <span class="tag is-rounded is-dark">{{ collection.rating }}</span></h6>
      		<a class="button is-warning is-medium is-rounded is-focused has-text-weight-light" :href="collection.link" target="_blank">View on Genius</a>
      	</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
	    		collections3: [
				{ 
					title: `Dear`,
					artist: `Cavetown`,
					rating: `4/4`,
					date: `June 29, 2018`,
					art: `https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2Fa8895f24545ffeb5d318dace7471bf5d.700x700x1.jpg`,
					link: `https://genius.com/albums/Cavetown/Dear`
				},
				{ 
					title: `Make My Bed`,
					artist: `King Princess`,
					rating: `5/5`,
					date: `June 15, 2018`,
					art: `https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F744ab83a4b178118c4b4145c84549a36.500x500x1.jpg`,
					link: `https://genius.com/albums/King-princess/Make-my-bed-ep`
				},
				{ 
					title: `Father`,
					artist: `August 08`,
					rating: `8/8`,
					date: `May 11, 2018`,
					art: `https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F347371b052264c0ff1ac9862f2a6d94b.1000x1000x1.jpg`,
					link: `https://genius.com/albums/August-08/Father`
				},
				{ 
					title: `My Dear Melancholy,`,
					artist: `The Weeknd`,
					rating: `6/6`,
					date: `March 30, 2018`,
					art: `https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F3a47f80d23cb3eb22c6c32af519420a3.640x640x1.png`,
					link: `https://genius.com/albums/The-weeknd/My-dear-melancholy`
				},
			],
	    		collections2: [
				{ 
					title: `Amen`,
					artist: `Rich Brian`,
					rating: `14/14`,
					date: `February 2, 2018`,
					art: `https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2Fc27f3271d72101753459d141983058d3.1000x1000x1.jpg`,
					link: `https://genius.com/albums/Rich-brian/Amen`
				},
				{ 
					title: `In Tongues`,
					artist: `Joji`,
					rating: `6/6`,
					date: `November 3, 2017`,
					art: `https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F8d66d740ddcd26b55b23777cb433132f.1000x1000x1.jpg`,
					link: `https://genius.com/albums/Joji/In-tongues`
				},
				{ 
					title: `After Laughter`,
					artist: `Paramore`,
					rating: `11/12`,
					date: `May 12, 2017`,
					art: `https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2Ff0c0070bd195fe5e709ea515de669ea2.1000x1000x1.jpg`,
					link: `https://genius.com/albums/Paramore/After-laughter`
				},
				{ 
					title: `The Click`,
					artist: `AJR`,
					rating: `11/13`,
					date: `June 9, 2017`,
					art: `https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2Fc9566e42fa31430d573312f3e25d1f79.1000x1000x1.jpg`,
					link: `https://genius.com/albums/Ajr/The-click`
				},
				{ 
					title: `Death of a Bachelor`,
					artist: `Panic! At The Disco`,
					rating: `11/11`,
					date: `January 15, 2016`,
					art: `https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F436abd0ff115d7f1e6566400223b272b.1000x1000x1.jpg`,
					link: `https://genius.com/albums/Panic-at-the-disco/Death-of-a-bachelor`
				},
			],
			collections1: [
				{ 
					title: `Dead`,
					artist: `Blackbear`,
					rating: `5/5`,
					date: `June 2, 2015`,
					art: `https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2Ffc57fa9dbe711507d283baba10d82efd.630x630x1.jpg`,
					link: `https://genius.com/albums/Blackbear/Dead-ep`
				},
				{ 
					title: `She's Only Sixteen`,
					artist: `She's Only Sixteen`,
					rating: `5/5`,
					date: `September 28, 2012`,
					art: `https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2Fc309a1c99a4f2a887d931deaab512707.500x493x1.jpg`,
					link: `https://genius.com/albums/Shes-only-sixteen/She-s-only-sixteen`
				},
				{ 
					title: `Me and My Uke`,
					artist: `Never Shout Never`,
					rating: `3/3`,
					date: `2009`,
					art: `https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2Ff94b8119872da95aebd7c8c49248f49c.1000x1000x1.jpg`,
					link: `https://genius.com/albums/Never-shout-never/Me-and-my-uke`
				},
				{ 
					title: `The Black Parade`,
					artist: `My Chemical Romance`,
					rating: `14/14`,
					date: `October 23, 2006`,
					art: `https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F23c0dc0c254bda53c93e044b6b66eb74.640x640x1.jpg`,
					link: `https://genius.com/albums/My-chemical-romance/The-black-parade`
				},
				{ 
					title: `I'm Wide Awake, It's Morning`,
					artist: `Bright Eyes`,
					rating: `9/10`,
					date: `January 25, 2005`,
					art: `https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F18dbcb96a24c27e991d9342428d01fce.1000x1000x1.jpg`,
					link: `https://genius.com/albums/Bright-eyes/I-m-wide-awake-it-s-morning`
				},
			]
		}
    }
  }
</script>

<style lang="css">
body {
  margin-top: 1%;
}
.main-logo {
  width: 25%;
  height: 25%;
  -webkit-box-shadow: 0 8px 6px -6px black;
    -moz-box-shadow: 0 8px 6px -6px black;
         box-shadow: 0 8px 6px -6px black;
  margin-bottom: 5%;
  margin-top: 5%;
}
.collection-image {
	margin-bottom: 5%;
	-webkit-box-shadow: 0 8px 6px -6px black;
   -moz-box-shadow: 0 8px 6px -6px black;
    	box-shadow: 0 8px 6px -6px black;
    filter: grayscale(1);
}
.collection-image:hover {
	filter: none;
}
#genius-link {
	font-weight: bold;
}
#intro-text {
	padding: 0% 15% 1% 15%;
	max-width: 70%;
}

@media only screen and (max-width: 768px) and (min-width: 320px) {
  .main-logo {
    width: 80%;
    height: 80%;
  }
  .collection-image {
  	width: 65%;
  	width: 65%;
  }
  #intro-text {
	padding: 10% 15% 1% 15%;
	max-width: 100%;
  }
}
</style>
