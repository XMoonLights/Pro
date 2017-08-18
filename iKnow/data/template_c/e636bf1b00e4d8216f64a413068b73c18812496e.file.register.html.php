<?php /* Smarty version Smarty-3.1.16, created on 2017-05-09 07:30:00
         compiled from "tpl\admin\register.html" */ ?>
<?php /*%%SmartyHeaderCode:81775911498717c5b9-94149052%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'e636bf1b00e4d8216f64a413068b73c18812496e' => 
    array (
      0 => 'tpl\\admin\\register.html',
      1 => 1494314997,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '81775911498717c5b9-94149052',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.16',
  'unifunc' => 'content_591149871ab3b9_96314160',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_591149871ab3b9_96314160')) {function content_591149871ab3b9_96314160($_smarty_tpl) {?><!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
		<title>Bootstrap 实例 - 水平表单</title>
		<link rel="stylesheet" href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css">
		<script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
		<script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	</head>

	<body>
		<div class="container">
			<form class="form-horizontal" role="form" action="admin.php?controller=admin&method=register" method="post">
				<div class="form-group">
					<label for="username" class="col-sm-2 control-label">用户名：</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" name="username" id="username" placeholder="input username">
					</div>
				</div>
				<div class="form-group">
					<label for="password" class="col-sm-2 control-label">密码：</label>
					<div class="col-sm-10">
						<input type="password" class="form-control" name="password" id="password" placeholder="input password">
					</div>
				</div>
				<div class="form-group">
					<label for="check" class="col-sm-2 control-label">确认密码：</label>
					<div class="col-sm-10">
						<input type="password" class="form-control" name="check" id="check" placeholder="check the password">
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-offset-2 col-sm-10">
						<button type="submit" class="btn btn-default">注册</button>
					</div>
				</div>
			</form>
		</div>

	</body>

</html><?php }} ?>
