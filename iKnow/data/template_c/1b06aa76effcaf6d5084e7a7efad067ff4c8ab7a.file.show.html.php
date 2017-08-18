<?php /* Smarty version Smarty-3.1.16, created on 2017-05-10 18:13:50
         compiled from "tpl\index\show.html" */ ?>
<?php /*%%SmartyHeaderCode:2609555cf4267df0177-16415363%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '1b06aa76effcaf6d5084e7a7efad067ff4c8ab7a' => 
    array (
      0 => 'tpl\\index\\show.html',
      1 => 1494411224,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2609555cf4267df0177-16415363',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.16',
  'unifunc' => 'content_55cf4267e397c7_55513938',
  'variables' => 
  array (
    'data' => 0,
    'comment' => 0,
    'comments' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_55cf4267e397c7_55513938')) {function content_55cf4267e397c7_55513938($_smarty_tpl) {?><!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
		<title>评论</title>
		<link rel="stylesheet" href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="http://127.0.0.1:80/MVC/img/css/advice.css" />
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
			
			.post .post-footer {
				margin-top: 30px;
				border-top: 1px solid #ebebeb;
				padding: 21px 0 0;
			}
			
			.post .post-footer .tag-list {
				color: #959595;
				line-height: 28px;
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

							</ul>

						</div>
					</div>
				</div>
			</div>
		</nav>
		<div class="jumbotron">
			<div class="container">
				<div class="panel-body">
					<div class="list">
						<h3><?php echo $_smarty_tpl->tpl_vars['data']->value['title'];?>
</h3>
						<span>作者:<?php echo $_smarty_tpl->tpl_vars['data']->value['author'];?>
</span>•
						<span>时间:<?php echo $_smarty_tpl->tpl_vars['data']->value['dateline'];?>
</span>
						<p><?php echo $_smarty_tpl->tpl_vars['data']->value['content'];?>
</p>

					</div>
				</div>
				<a href="index.php?controller=index&method=collect&id=<?php echo $_smarty_tpl->tpl_vars['data']->value['id'];?>
" class="btn btn-info">关注</a>
				<button class="btn btn-info" data-toggle="modal" data-target="#myModal">回答</button>
			</div>
		</div>
		<!-- 模态框（Modal）  data-backdrop="false"属性设置模态框外部区域点击时不会关闭模态框-->
		<div class="modal fade" id="myModal" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">your answer :</h4>
					</div>
					<div class="modal-body">
						<form role="form" action="index.php?controller=index&method=commentadd" method="post">
							<div class="form-group">
								<input type="hidden" name="newsId" value="<?php echo (($tmp = @$_smarty_tpl->tpl_vars['data']->value['id'])===null||$tmp==='' ? '' : $tmp);?>
" />
								<textarea class="form-control" rows="3" name="content"></textarea>
							</div>
							<button type="submit" class="btn btn-primary">提交</button>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" data-dismiss="modal" class="btn btn-primary">关闭</button>
					</div>
				</div>
				<!-- /.modal-content -->
			</div>
			<!-- /.modal -->
		</div>
		<!--<div class="container">
			<div class="adviceList">
				<span name="numList"></span>
				<p name="numList">个结果</p>

			</div>
		</div>-->
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<?php if ($_smarty_tpl->tpl_vars['comment']->value!='') {?>
					<?php  $_smarty_tpl->tpl_vars['comments'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['comments']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['comment']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['comments']->key => $_smarty_tpl->tpl_vars['comments']->value) {
$_smarty_tpl->tpl_vars['comments']->_loop = true;
?>
					<article class="post">
						<div class="post-content">
							<p name="pContent">
								<?php echo $_smarty_tpl->tpl_vars['comments']->value['content'];?>

							</p>
						</div>
						<footer class="post-footer clearfix" style="position: relative;">
							<div class="pull-left tag-list">
								<span class="author"><?php echo $_smarty_tpl->tpl_vars['comments']->value['author'];?>
</span> • <span><?php echo $_smarty_tpl->tpl_vars['comments']->value['dateline'];?>
</span>
							</div>
							<button class="btn btn-danger" style="position: absolute;right: 20px;">点赞</button>
						</footer>
					</article>
					<?php } ?>
					<?php } else { ?>
					<div class="jumbotron">
						<div class="container" style="text-align: center;">
							<h1>没有评论内容</h1>
						</div>
					</div>
					<?php }?>
				</div>
			</div>
		</div>

		<button id="answer" class="btn btn-info" data-toggle="modal" data-target="#myModal">回答</button>
	</body>
	<!--<script type="text/javascript" src="http://127.0.0.1:80/MVC/img/js/advice.js"></script>-->
	<script type="text/javascript" src="http://127.0.0.1:80/MVC/img/js/btn_tools.js"></script>

</html><?php }} ?>
