<?php /* Smarty version Smarty-3.1.16, created on 2017-05-09 18:28:19
         compiled from "tpl\index\index.html" */ ?>
<?php /*%%SmartyHeaderCode:1267155cf421eeae136-83142775%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '582ec9b926802535936711aced7500a86e7634d9' => 
    array (
      0 => 'tpl\\index\\index.html',
      1 => 1494323360,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1267155cf421eeae136-83142775',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.16',
  'unifunc' => 'content_55cf421f20eb88_93456414',
  'variables' => 
  array (
    'username' => 0,
    'data' => 0,
    'news' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_55cf421f20eb88_93456414')) {function content_55cf421f20eb88_93456414($_smarty_tpl) {?><!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
		<title>iKnow</title>
		<link rel="stylesheet" href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="http://127.0.0.1:80/MVC/img/css/index.css" />
		<script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
		<script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<style>
			.post {
				padding: 35px;
				background: #ffffff;
				margin-bottom: 35px;
				position: relative;
				overflow: hidden;
			}
			
			.post .post-head {
				text-align: center;
			}
			
			.post .post-head .post-title {
				margin: 0;
				font-size: 2.5em;
				line-height: 1em;
			}
			
			.post .post-head .post-meta {
				color: #959595;
				margin: 14px 0 0px;
			}
			
			.post .post-head .post-meta span {
				margin: 0px 7px;
				white-space: nowrap;
			}
			
			.post .post-content {
				margin: 30px 0;
			}
			
			.post-content {
				font: 400 18px/1.62 "Georgia", "Xin Gothic", "Hiragino Sans GB", "Droid Sans Fallback", "Microsoft YaHei", sans-serif;
				color: #444443;
			}
			
			a[name|="acolor"] {
				color: #e67e22;
			}
			
			.sidebar .widget {
				background: #ffffff;
				padding: 21px 30px;
				margin-bottom: 35px;
			}
			
			.widget .title {
				margin-top: 0;
				padding-bottom: 7px;
				border-bottom: 1px solid #ebebeb;
				margin-bottom: 21px;
				position: relative;
			}
			div[name|='tips']{
				text-align: center;
			}
		</style>
	</head>

	<body style="background-color: #E8E8E8;">
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
							<ul class="nav navbar-nav">
								<li>
									<a href="index.php" name="choose">首页</a>
								</li>
								<li>
									<a href="#" data-toggle="modal" data-target="#questionModal">提问</a>
								</li>

							</ul>

						</div>
					</div>
				</div>
			</div>
		</nav>

		<section class="text" style="display: block;margin-top: 20px;">
			<div class="container">
				<div class="row">
					<aside class="col-sm-4 sidebar">
						<div class="widget">
							<h4 class="title">工具</h4>
							<div class="search">
								<form class="form-inline" action="index.php?controller=index&method=newssearch" method="post">
									<div class="form-group">
										<input type="text" class="form-control" name="title" placeholder="Search">
									</div>
									<button type="submit" class="btn btn-default" style="background-color: #e67e22;">搜索</button>
								</form>
							</div>
						</div>
						<div class="widget">
							<h4 class="title">话题</h4>
							<div class="search">
								<div class="form-group" name='tips'>
									<a href="index.php?controller=index&method=tagsearch&tag=business" class="btn btn-default">商业</a>
									<a href="index.php?controller=index&method=tagsearch&tag=car" class="btn btn-default">汽车</a>
									<a href="index.php?controller=index&method=tagsearch&tag=cartoon" class="btn btn-default">动漫</a>
								</div>
								<div class="form-group" name='tips'>
									<a href="index.php?controller=index&method=tagsearch&tag=design" class="btn btn-default">设计</a>
									<a href="index.php?controller=index&method=tagsearch&tag=finance" class="btn btn-default">金融</a>
									<a href="index.php?controller=index&method=tagsearch&tag=food" class="btn btn-default">美食</a>
								</div>
								<div class="form-group" name='tips'>
									<a href="index.php?controller=index&method=tagsearch&tag=game" class="btn btn-default">游戏</a>
									<a href="index.php?controller=index&method=tagsearch&tag=health" class="btn btn-default">健康</a>
									<a href="index.php?controller=index&method=tagsearch&tag=internet" class="btn btn-default">互联网</a>
								</div>
								<div class="form-group" name='tips'>
									<a href="index.php?controller=index&method=tagsearch&tag=movie" class="btn btn-default">电影</a>
									<a href="index.php?controller=index&method=tagsearch&tag=music" class="btn btn-default">音乐</a>
									<a href="index.php?controller=index&method=tagsearch&tag=photography" class="btn btn-default">摄影</a>
								</div>
								<div class="form-group" name='tips'>
									<a href="index.php?controller=index&method=tagsearch&tag=sport" class="btn btn-default">运动</a>
									<a href="index.php?controller=index&method=tagsearch&tag=technology" class="btn btn-default">科技</a>
									<a href="index.php?controller=index&method=tagsearch&tag=travel" class="btn btn-default">旅行</a>
								</div>
							</div>
						</div>
						<div class="widget">
							<a href="admin.php?controller=admin&method=newslist" style="display: block;" class="title"><?php echo (($tmp = @$_smarty_tpl->tpl_vars['username']->value['username'])===null||$tmp==='' ? 'User' : $tmp);?>
</a>
							<?php if ($_smarty_tpl->tpl_vars['username']->value['username']=='') {?>
							<button class="btn btn-danger" data-toggle="modal" data-target="#login">登录</button> 
							<a href="admin.php?controller=admin&method=register" class="btn btn-info">注册</a>
							<?php } else { ?>
							<a href="index.php?controller=admin&method=logout" class="btn btn-primary">登出</a>
							<?php }?>
						</div>
					</aside>
					<div class="col-sm-8">
						<?php if ($_smarty_tpl->tpl_vars['data']->value!='') {?>
						<?php  $_smarty_tpl->tpl_vars['news'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['news']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['data']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['news']->key => $_smarty_tpl->tpl_vars['news']->value) {
$_smarty_tpl->tpl_vars['news']->_loop = true;
?>

						<article class="post">

							<div class="post-head">
								<h1 class="post-title"><?php echo $_smarty_tpl->tpl_vars['news']->value['title'];?>
</h1>
								<div class="post-meta">
									<span class="author">作者：<a href="" name="acolor"><?php echo $_smarty_tpl->tpl_vars['news']->value['author'];?>
</a></span> •
									<span>:<?php echo $_smarty_tpl->tpl_vars['news']->value['dateline'];?>
</span> • 
									<span>标签所属：<?php echo $_smarty_tpl->tpl_vars['news']->value['tag'];?>
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
							</div>
						</article>
						<?php } ?>
						<?php } else { ?>
						<div class="jumbotron">
							<div class="container" style="text-align: center;">
								<h1>没有内容</h1>
							</div>
						</div>
						<?php }?>
					</div>

				</div>
			</div>

		</section>
		<div class="modal fade" id="questionModal" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>-->
						<h4 class="modal-title" id="myModalLabel">请输入你的问题：</h4>
					</div>
					<div class="modal-body">
						<form role="form" action="admin.php?controller=admin&method=newsadd" method="post">
							<div class="form-group">
								<label for="title">索引标题：</label>
								<input type="text" id="title" name="title" class="form-control" />
							</div>
							<div class="form-group">
								<!--<label for="name">文本框</label>-->
								<textarea class="form-control" rows="6" name="content"></textarea>
							</div>
							<div class="form-group">
								<label for="name">标签：</label>
								<select class="form-control" name="tag">
									<option>business</option>
									<option>car</option>
									<option>cartoon</option>
									<option>design</option>
									<option>finance</option>
									<option>food</option>
									<option>game</option>
									<option>health</option>
									<option>internet</option>
									<option>movie</option>
									<option>music</option>
									<option>photography</option>
									<option>sport</option>
									<option>technology</option>
									<option>travel</option>
								</select>
							</div>
							<button type="submit" class="btn btn-primary">提交</button>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
					</div>
				</div>
				<!-- /.modal-content -->
			</div>
			<!-- /.modal -->
		</div>

		<div class="modal fade" id="login" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-body">
						<form role="form" action="index.php?controller=admin&method=login" method="post">
							<div class="form-group">
								<label for="username">用户名：</label>
								<input type="text" id="username" name="username" class="form-control" />
							</div>
							<div class="form-group">
								<label for="password">密码：</label>
								<input type="password" id="password" name="password" class="form-control" />
							</div>
							<button type="submit" class="btn btn-primary">提交</button>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
					</div>
				</div>
				<!-- /.modal-content -->
			</div>
			<!-- /.modal -->
		</div>

	</body>
	<script type="text/javascript" src="http://127.0.0.1:80/MVC/img/js/index.js"></script>

</html><?php }} ?>
