<template>
	<div class="ReactWorks">
		<div class="header-react-works">
			<h1>Recent <span>Works</span></h1>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibheuismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi erim adminim veniam,quis nostruc exerci tation ullamcorper suscipit lobortis nisl tu atiquipex ea commodo conseque.....</p>
			<ul class="btnList clearfix">
				<li class="btn" v-for="item in btns">
					<a href="#" v-bind:class="{active:item.active}" v-text="item.text"></a>
				</li>
			</ul>
		</div>
		<div class="container-react-works">
			<ul class="workList">
				<li class="reactWork" v-for="item in works">
					<img v-bind:src="'../../static/images/'+item.src" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				btns: [{
						"text": 'ALL',
						"active": true
					},
					{
						"text": 'BRANDING',
						"active": false
					},
					{
						"text": 'ILLUSTRAIONS',
						"active": false
					},
					{
						"text": 'WEB DESIGN',
						"active": false
					}
				],
				works: []
			}
		},
		//vue生命周期中的钩子函数，当模板渲染完成后执行
		mounted() {
			this.$http.get('/api/works').then((data) => {
				this.works = data.body.data;
			})
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header-react-works {
		padding: 50px 20%;
	}
	
	.header-react-works>h1 {
		margin: 0px;
		padding: 0px;
		color: #666666;
	}
	
	.header-react-works>h1>span {
		color: #E74C3C;
	}
	
	.header-react-works>p {
		color: #666666;
		margin-bottom: 50px;
		padding: 0 14%;
		word-break: break-all;
	}
	
	.btnList {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.btn {
		float: left;
		margin-right: 20px;
	}
	
	.btn>a {
		display: block;
		padding: 10px 30px;
		color: #666666;
		border: 2px solid #777777;
		border-radius: 3px;
		text-decoration: none;
	}
	
	.btn>a.active {
		border: 2px solid #E74C3C;
		background-color: #E74C3C;
		color: #FFFFFF;
	}
	
	.workList {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	li.reactWork {
		float: left;
		width: 25%;
		margin-bottom: -4px;
	}
	
	.reactWork>img {
		width: 100%;
	}
</style>