<template>
	<div class="Home">
		<ul class="iconList clearfix">
			<li v-for="item in icons">
				<div class="icon">
					<img v-bind:src="'../../static/images/'+item.src" />
				</div>
				<p v-text="item.text"></p>
			</li>
		</ul>
		<div class="section clearfix">
			<img src="../../static/images/picture02.jpg" />
			<div class="artice">
				<h1><span>web</span> development</h1>
				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibheuismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi erim adminim veniam,quis nostruc exerci tation ullamcorper suscipit lobortis nisl tu atiquipex ea commodo conseque.....</p>
				<a href="#">Read More</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				icons: []
			}
		},
		// 在组件创建完成时，执行的钩子函数
		created() {
			// 在main.js里导入并使用vue-resource之后，就可以通过this.$http来使用vue-resource了，这里用到了get方法请求json数据
			this.$http.get('/api/icons').then((data) => {
				this.icons = data.body.data;
			})
		}
	}
</script>

<style scoped>
	.iconList {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.iconList>li {
		float: left;
		padding: 20px;
		margin-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	
	.iconList>li>p {
		margin-top: 30px;
		color: #777777;
	}
	/*取li中的偶数项,为其中的p标签添加相应样式*/
	
	.iconList>li:nth-child(even)>p {
		color: #E74C3C;
	}
	
	.icon {
		width: 80px;
		height: 80px;
		border: 1px solid #777777;
		transform: rotate(-45deg);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	/*取li中的偶数项,为其中的div.icon添加相应样式*/
	
	.iconList>li:nth-child(even) .icon {
		border: 1px solid #E74C3C;
	}
	
	.icon>img {
		transform: rotate(45deg);
	}
	
	.section {
		width: 60%;
		margin: 50px auto 0;
	}
	
	.section>img {
		float: left;
		margin-right: 5%;
		width: 40%;
	}
	
	.artice {
		text-align: left;
	}
	
	.artice>h1 {
		margin: 0;
		padding: 0;
		color: #666666;
	}
	
	.artice>h1>span {
		color: #E74C3C;
	}
	
	.artice>p {
		color: #777777;
	}
	
	.artice>a {
		display: inline-block;
		padding: 10px 30px;
		color: #FFFFFF;
		text-decoration: none;
		margin-top: 30px;
		background-color: #E74C3C;
		border-radius: 3px;
	}
</style>