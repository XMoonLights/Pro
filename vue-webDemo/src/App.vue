<template>
	<div id="app">
		<div class="navbar">
			<ul class="tabList clearfix">
				<li class="tab">
					<router-link to="/" class="tab_a">Home</router-link>
				</li>
				<li class="tab">
					<router-link to="/reactworks" class="tab_a">ReactWorks</router-link>
				</li>
				<li class="tab">
					<router-link to="/contactme" class="tab_a">ContactMe</router-link>
				</li>
			</ul>
		</div>
		<div class="banner">
			<img src="../static/images/logo.jpg" />
			<h2>I am a <span>Freelancer Designer</span></h2>
			<p>Web Development - IOS Developer - Internet Marketer - Your Freelance</p>
			<a href="#">Learn More</a>
		</div>
		<div class="container">
			<transition :name="transitionName">
				<router-view></router-view>
			</transition>
		</div>
		<div class="footer">
			<div class="logo">
				<img src="../static/images/logo03.jpg"/>
			</div>
			<div class="provider">
				<ul class="providerList">
					<li class="providerItem" v-for="item in 6">
						<a href="#" class="provider_a"></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				transitionName:'slide'
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		position: relative;
	}
	
	.clearfix:after {
		display: block;
		content: '';
		clear: both;
	}
	
	.tabList {
		position: absolute;
		top: 0;
		left: 0;
		margin: 0;
		padding: 0;
		list-style: none;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #333333;
		opacity: .5;
	}
	
	.tab {
		float: left;
		padding: 0 2%;
	}
	
	.tab:hover {
		background-color: #333333;
	}
	
	.tab_a {
		display: block;
		padding: 0 2%;
		height: 60px;
		line-height: 60px;
		color: #FFFFFF;
		text-decoration: none;
	}
	
	.tab_a:hover {
		color: #FFFFFF;
	}
	
	.banner {
		width: 100%;
		background: url(../static/images/bg.jpg) no-repeat;
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: #FFFFFF;
		padding: 10% 0;
	}
	
	.banner>img {
		display: block;
		margin-bottom: 50px;
		transform: rotate(-45deg);
	}
	
	.banner>h2 {
		margin: 0;
	}
	
	.banner>h2>span {
		color: #e74c3c;
	}
	
	.banner>a {
		display: block;
		border: 1px solid #fff;
		border-radius: 3px;
		text-decoration: none;
		color: #FFFFFF;
		margin-top: 50px;
		padding: 10px 30px;
	}
	/*Container*/
	.container{
		margin-bottom: 40px;
	}
	/*Footer*/
	.logo{
		width: 100%;
		height: 60px;
		background-color: #3a5169;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.logo>img{
		width: 242px;
	}
	.provider{
		width: 100%;
		height: 140px;
		background-color: #1c2230;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.providerList{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.providerItem{
		float: left;
		padding: 0 36px;
	}
	.provider_a{
		display: block;
		width: 50px;
		height: 50px;
		background-color: #FFFFFF;
	}
	.providerItem:first-of-type>.provider_a{
		background-image: url(../static/images/provider.jpg);
		background-position-x: 0px;
		background-size: cover;
	}
	.providerItem:nth-of-type(2)>.provider_a{
		background-image: url(../static/images/provider.jpg);
		background-position-x: 20%;
		background-size: cover;
	}
	.providerItem:nth-of-type(3)>.provider_a{
		background-image: url(../static/images/provider.jpg);
		background-position-x: 40%;
		background-size: cover;
	}
	.providerItem:nth-of-type(4)>.provider_a{
		background-image: url(../static/images/provider.jpg);
		background-position-x: 60%;
		background-size: cover;
	}
	.providerItem:nth-of-type(5)>.provider_a{
		background-image: url(../static/images/provider.jpg);
		background-position-x: 80%;
		background-size: cover;
	}
	.providerItem:last-of-type>.provider_a{
		background-image: url(../static/images/provider.jpg);
		background-position-x: 100%;
		background-size: cover;
	}
</style>