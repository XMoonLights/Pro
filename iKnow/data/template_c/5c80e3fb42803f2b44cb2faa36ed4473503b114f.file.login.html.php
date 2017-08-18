<?php /* Smarty version Smarty-3.1.16, created on 2017-05-11 09:03:15
         compiled from "tpl\admin\login.html" */ ?>
<?php /*%%SmartyHeaderCode:2584055cd90bede4567-73516456%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '5c80e3fb42803f2b44cb2faa36ed4473503b114f' => 
    array (
      0 => 'tpl\\admin\\login.html',
      1 => 1494315379,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2584055cd90bede4567-73516456',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.16',
  'unifunc' => 'content_55cd90bee17b81_94546910',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_55cd90bee17b81_94546910')) {function content_55cd90bee17b81_94546910($_smarty_tpl) {?><!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
		<title>iKnow</title>
		<link rel="stylesheet" href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css">
		<!--<script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
		<script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>-->
	</head>

	<body>
		<div class="container">
			<form class="form-horizontal" action="admin.php?controller=admin&method=login" method="post" name="loginList" style="display: block;">
				<div class="form-group">
					<label for="username" class="col-sm-2 control-label">用户名：</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" name="username" id="username" placeholder="请输入用户名">
					</div>
				</div>
				<div class="form-group">
					<label for="password" class="col-sm-2 control-label">密码：</label>
					<div class="col-sm-10">
						<input type="password" class="form-control" name="password" id="password" placeholder="请输入密码">
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-offset-2 col-sm-10">
						<button type="submit" class="btn btn-default">登录</button>
						<a href="admin.php?controller=admin&method=register" style="margin-left: 20px;">注册用户</a>
					</div>
				</div>
			</form>
		</div>

	</body>

</html><?php }} ?>
