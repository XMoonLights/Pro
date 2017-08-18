<?php /* Smarty version Smarty-3.1.16, created on 2017-05-11 06:46:02
         compiled from "tpl\admin\newslist.html" */ ?>
<?php /*%%SmartyHeaderCode:2268155cef3c9499486-57095768%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '79b02dc9ee4a4edeacd766122de7f48dbfba6d8a' => 
    array (
      0 => 'tpl\\admin\\newslist.html',
      1 => 1494485156,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2268155cef3c9499486-57095768',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.16',
  'unifunc' => 'content_55cef3c95f9a52_04486089',
  'variables' => 
  array (
    'username' => 0,
    'data' => 0,
    'news' => 0,
    'collect' => 0,
    'temp' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_55cef3c95f9a52_04486089')) {function content_55cef3c95f9a52_04486089($_smarty_tpl) {?><!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
		<title>iKnow</title>
		<link rel="stylesheet" href="img/css/reset.css">
		<link rel="stylesheet" href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="img/css/home.css">
		<script src="http://cdn.static.runoob.com/libs/jquery/1.10.2/jquery.min.js"></script>
		<style>
			div[name|="userMessage"] {
				display: none;
			}
		</style>
	</head>

	<body>
		<div class="card">
			<div class="cardHead" style="background-image: url(img/images/background1.jpg);">
				<a href="index" class="btn btn-info" name="returnIndex">返回首页</a>
			</div>
			<div class="cardBody">
				<div class="cardFlag">
					<!--<a href="#"><input type="file" id="picture" /></a>-->
					<img src="img/images/defaultImg.jpg" alt="头像" id="ImgPr" />
				</div>
				<div class="cardContent">
					<?php if ($_smarty_tpl->tpl_vars['username']->value['username']=='') {?>
					<a href="admin.php?controller=admin&method=login" class="btn btn-danger">登录 </a>
					<?php } else { ?>
					<h1><?php echo $_smarty_tpl->tpl_vars['username']->value['username'];?>
</h1>
					<a href="admin.php?controller=admin&method=logout">退出 </a>
					<?php }?>
					<button class="btn btn-info" id="edit" name="edit">编辑</button>
				</div>
			</div>
		</div>
		<nav class="navbar navbar-inverse" role="navigation" style="margin-bottom: 0;border-radius: 0;">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbarPro">
						<span class="sr-only">切换导航</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
						</div>
						<div class="collapse navbar-collapse" id="navbarPro">
							<ul class="menu">
								<li name="card_li">
									<a href="#">发表内容</a>
								</li>
								<li name="card_li">
									<a href="#">收藏内容</a>
								</li>
							</ul>

						</div>
					</div>
				</div>
			</div>
		</nav>
		<div class="myContent">
			<div class="contents" name="contents">
				<div class="container">
					<div class="row">
						<aside class="col-sm-4 sidebar">
							<div class="widget">
								<h4 class="title">社区</h4>
								<div class="search">
									<form class="form-inline" action="/index" method="post">
										<div class="form-group">
											<input type="text" class="form-control" name="selectMessage" placeholder="Search">
										</div>
										<button type="submit" class="btn btn-default" style="background-color: #e67e22;">Search</button>
									</form>
								</div>
							</div>
						</aside>
						<div class="col-sm-8">
							<div name="userMessage" style="display: block;">
								<?php if ($_smarty_tpl->tpl_vars['data']->value!='') {?> <?php  $_smarty_tpl->tpl_vars['news'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['news']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['data']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['news']->key => $_smarty_tpl->tpl_vars['news']->value) {
$_smarty_tpl->tpl_vars['news']->_loop = true;
?>
								<article class="post">

									<div class="post-head">
										<h1 class="post-title"><?php echo $_smarty_tpl->tpl_vars['news']->value['title'];?>
</h1>
										<div class="post-meta">
											<span>发布时间：<?php echo $_smarty_tpl->tpl_vars['news']->value['dateline'];?>
</span>
										</div>
									</div>
									<div class="post-content">
										<p name="pContent">
											<?php echo $_smarty_tpl->tpl_vars['news']->value['content'];?>

										</p>
									</div>
									<div class="post-permalink">
										<a href='index.php?controller=index&method=newsshow&id=<?php echo $_smarty_tpl->tpl_vars['news']->value['id'];?>
' class="btn btn-info">阅读更多</a>
										<input type="image" class="btn btn-danger" src="img/images/icn_trash.png" style="display: none;" title="删除" name="delBtn" onclick="window.location.href='admin.php?controller=admin&method=newsdel&id=<?php echo $_smarty_tpl->tpl_vars['news']->value['id'];?>
'" />
									</div>
								</article>
								<?php } ?> <?php } else { ?>
								<div class="jumbotron" style="text-align: center;">
									<h1>没有内容</h1>
								</div>
								<?php }?>
							</div>
							<div name="userMessage">
								<?php if ($_smarty_tpl->tpl_vars['collect']->value!='') {?> <?php  $_smarty_tpl->tpl_vars['temp'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['temp']->_loop = false;
 $_smarty_tpl->tpl_vars['num'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['collect']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['temp']->key => $_smarty_tpl->tpl_vars['temp']->value) {
$_smarty_tpl->tpl_vars['temp']->_loop = true;
 $_smarty_tpl->tpl_vars['num']->value = $_smarty_tpl->tpl_vars['temp']->key;
?>
								<article class="post">

									<div class="post-head">
										<h1 class="post-title"><?php echo $_smarty_tpl->tpl_vars['temp']->value['title'];?>
</h1>
										<div class="post-meta">
											<span class="author">作者：<?php echo $_smarty_tpl->tpl_vars['temp']->value['author'];?>
</span> •
											<span>发布时间：<?php echo $_smarty_tpl->tpl_vars['temp']->value['dateline'];?>
</span>
										</div>
									</div>
									<div class="post-content">
										<p name="pContent">
											<?php echo $_smarty_tpl->tpl_vars['temp']->value['content'];?>

										</p>
									</div>
									<div class="post-permalink">
										<a href='index.php?controller=index&method=newsshow&id=<?php echo $_smarty_tpl->tpl_vars['temp']->value['id'];?>
' class="btn btn-info">阅读</a>
										<input type="image" class="btn btn-danger" src="img/images/icn_trash.png" style="display: none;" title="删除" name="delBtn" onclick="window.location.href='admin.php?controller=admin&method=newsdel&id=<?php echo $_smarty_tpl->tpl_vars['temp']->value['id'];?>
'" />
									</div>
								</article>
								<?php } ?> <?php } else { ?>
								<div class="jumbotron" style="text-align: center;">
									<h1>没有内容</h1>
								</div>
								<?php }?>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
	<script type="text/javascript" src="img/js/myContent.js"></script>
	<script>
		var delBtn = document.getElementsByName('delBtn');
		var editBtn = document.getElementById('edit');
		editBtn.onclick = function() {
			var name = editBtn.getAttribute('name');
			switch(name) {
				case "edit":
					none();
					break;
				case "back":
					display();
					break;
				default:
					alert(name);
			}
		}
		var none = function() {
			for(var i = 0; i < delBtn.length; i++) {
				delBtn[i].style.display = "inline-block";
			}
			editBtn.innerHTML = "取消编辑";
			editBtn.setAttribute('name', 'back');
		}
		var display = function() {
			for(var i = 0; i < delBtn.length; i++) {
				delBtn[i].style.display = "none";
			}
			editBtn.innerHTML = "编辑";
			editBtn.setAttribute('name', 'edit');
		}

		//		$("#picture").change(function() {
		//      var $file = $(this);
		//      var fileObj = $file[0];
		//      var windowURL = window.URL || window.webkitURL;
		//      var dataURL;
		//      var $img = $("#ImgPr");
		//      if(fileObj && fileObj.files && fileObj.files[0]){
		//      dataURL = windowURL.createObjectURL(fileObj.files[0]);
		//      $img.attr('src',dataURL);
		//      }else{
		//      dataURL = $file.val();
		//      var imgObj = document.getElementById("ImgPr");
		//      imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
		//      imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
		//        
		//      }
		//  });
	</script>

</html><?php }} ?>
