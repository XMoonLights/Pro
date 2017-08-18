<?php
/**
 *
 */
class adminController {
	public function __construct() {
		$authobj = M('auth');
		$this -> auth = $authobj -> getauth();
		//如果不是登录页，而且没有登录，就要跳转到登录页
//		if (empty($this -> auth) && (PC::$method != 'login')) {
//			$this -> showmessage('请登录后再操作', 'admin.php?controller=admin&method=login');
//		if(empty($this->auth)){
//			$this->showmessage('请登录后再操作','admin.php?controller=admin&method=login');
//		}

	}
	
	public function register(){
		if ($_POST) {
			$this -> checkregister();
		} else {
			View::display('admin/register.html');
		}
	}
	
	private function checkregister() {
		$authobj = M('auth');
		if ($authobj -> registersubmit()) {
//			$this -> showmessage('登录成功', 'admin.php?controller=admin&method=newslist');
			$this->showmessage('注册成功','admin.php?controller=admin&method=login');
			//			header('location:admin.php?controller=admin&method=index');
		} else {
			$this -> showmessage('注册失败', 'admin.php?controller=admin&method=register');
		}
	}

	public function login() {
		if ($_POST) {
			$this -> checklogin();
		} else {
			View::display('admin/login.html');
		}

	}

	private function checklogin() {
		$authobj = M('auth');
		if ($authobj -> loginsubmit()) {
//			$this -> showmessage('登录成功', 'admin.php?controller=admin&method=newslist');
			$this->showmessage('登录成功','index.php');
			//			header('location:admin.php?controller=admin&method=index');
		} else {
			$this -> showmessage('登录失败', 'admin.php?controller=admin&method=login');
		}
	}

	private function newssubmit() {
		$authobj = M('auth');
		$username = $authobj -> getauth();
		if(empty($this->auth)){
			$this->showmessage('请登录后再操作','admin.php?controller=admin&method=login');
		}
		$res = M('news') -> newssubmit($_POST, $username['username']);
		if ($res == 0) {
			$this -> showmessage('操作失败', 'admin.php?controller=admin&method=newsadd&id=' . $_POST['id']);
		}
		if ($res == 1) {
			$this -> showmessage('添加成功', 'admin.php?controller=admin&method=newslist');
		}
		if ($res == 2) {
			$this -> showmessage('修改成功', 'admin.php?controller=admin&method=newslist');
		}
	}

	public function index() {

		$newsobj = M('news');
		$newsnum = $newsobj -> count();
		View::assign(array('newsnum' => $newsnum));
		View::display('admin/index.html');
	}

	public function logout() {
		$authobj = M('auth');
		$authobj -> logout();
		$this -> showmessage('退出成功', 'index.php');
	}

	public function newsadd() {
		//
		if (empty($_POST)) {
			//没有数据就是显示添加修改的界面
			//读取信息 get the news
			if (isset($_GET['id'])) {

				$data = M('news') -> getnewsinfo($_GET['id']);

			} else {
				$data = array();
			}
			View::assign(array('data' => $data));
			View::display('admin/newsadd.html');
		} else {
			//进行添加
			//			print_r($_POST);
			$this -> newssubmit();

		}
	}

	public function newslist() {
		$authobj = M('auth');
		$username = $authobj -> getauth();
		$newsobj = M('news');
		$data = $newsobj -> findAll_orderby_author($username['username']);
		$collect = M('collect')->findAll_orderby_username($username['username']);
		View::assign(array('data' => $data,'username'=>$username,'collect'=>$collect));
		View::display('admin/newslist.html');
	}

	//
	public function newsdel() {
		if (intval($_GET['id'])) {
			$newsobj = M('news');
			$data = $newsobj -> delete_by_id($_GET['id']);
			$this -> showmessage('删除成功', 'admin.php?controller=admin&method=newslist');
		}

	}
	
	private function showmessage($info, $url) {
		echo "<script>alert('$info');window.location.href='$url'</script>";
		exit ;
	}

}
