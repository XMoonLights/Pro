<?php
	class adminModel{
		//定义表名 
		private $table = 'admin';

		//取用户信息 通过用户名
		function findOne_by_username($username){
			$sql = 'select * from '.$this->table.' where username = "'.trim($username).'"';

			return DB::findOne($sql);
		}
		
		function add_user($data){
			DB::insert($this->table,$data);
		}

		//用户名密码核对 auth模型
	}
?>