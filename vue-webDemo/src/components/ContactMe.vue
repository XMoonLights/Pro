<template>
	<div class="contact-me">
		<div class="container-contact-me">
			<h1><span>Contact</span> Me</h1>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibheuismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi erim adminim veniam,quis nostruc exerci tation ullamcorper suscipit lobortis nisl tu atiquipex ea commodo conseque.....</p>
			<div class="contact-form">
				<div class="form-input">
					<input type="text" placeholder="Name" />
					<input type="text" placeholder="Email" />
					<input type="text" placeholder="Subject" />
				</div>
				<textarea rows="3" cols="8" placeholder="Message"></textarea>
			</div>
			<a href="#">Submit</a>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.container-contact-me{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-top: 50px;
	}
	.container-contact-me>h1{
		margin: 0;
		padding: 0;
		color: #666666;
	}
	.container-contact-me>h1>span{
		color: #E74C3C;
	}
	.container-contact-me>p{
		margin: 30px 0;
		padding: 0 30%;
		color: #666666;
	}
	.contact-form{
		display: flex;
		width: 60%;
	}
	.form-input{
		flex: 6;
	}
	.form-input>input{
		display: block;
		width: 100%;
		height: 40px;
		line-height: 40px;
		padding: 0 5px;
		border: 1px solid #777777;
		border-radius: 3px;
		box-sizing: border-box;
	}
	.form-input>input:nth-of-type(2){
		margin: 10px 0;
	}
	.contact-form>textarea{
		flex: 6;
		width: 100%;
		margin-left: 30px;
		padding: 5px;
		border: 1px solid #777777;
		border-radius: 3px;
		box-sizing: border-box;
	}
	.container-contact-me>a{
		display: block;
		margin-top: 40px;
		padding: 10px 30px;
		color: #FFFFFF;
		background-color: #E74C3C;
		text-decoration: none;
		border-radius: 3px;
	}
</style>