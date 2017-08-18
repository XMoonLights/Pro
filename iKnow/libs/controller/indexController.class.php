<?php
class indexController {

	function index() {
		$authobj = M('auth');
		$username = $authobj -> getauth();
		$newsobj = M('news');

		$data = $newsobj -> get_news_list();
		//			echo $data.dateline;
		View::assign(array('data' => $data,'username'=>$username));
		//			$this->showabout();
		View::display('index/index.html');
	}

	function newsshow() {
		//news
		$data = M('news') -> getnewsinfo(intval($_GET['id']));
		
		//comments
		$comment = M('comments') -> getcommentsinfo(intval($_GET['id']));

		View::assign(array('data' => $data,'comment'=>$comment));
		//			$this->showabout();
		View::display('index/show.html');

	}

	function newssearch() {
		$authobj = M('auth');
		$username = $authobj -> getauth();
		$data = M('news') -> getnews_by_title(addslashes($_POST['title']));
		View::assign(array('data' => $data,'username'=>$username));
		View::display('index/index.html');
	}
	
	function tagsearch() {
		$authobj = M('auth');
		$username = $authobj -> getauth();
		$data = M('news') -> getnews_by_tag(addslashes($_GET['tag']));
		View::assign(array('data' => $data,'username'=>$username));
		View::display('index/index.html');
	}

	function commentadd() {
		$authobj = M('auth');
		$this -> auth = $authobj -> getauth();
		if(empty($this->auth)){
			$this->showmessage('请登录后再操作','admin.php?controller=admin&method=login');
		}
		$res = M('comments')->commentsubmit($_POST,$this->auth['username']);
		if($res==0){
			$this->showmessage('操作失败','index.php?controller=index&method=newsshow&id='.$_POST['newsId']);
		}
		if($res==1){
			$this->showmessage('添加成功','index.php?controller=index&method=newsshow&id='.$_POST['newsId']);
		}
	}

//	function commentsubmit() {
//		$authobj = M('auth');
//		$this -> auth = $authobj -> getauth();
//		if(empty($this->auth)){
//			$this->showmessage('请登录后再操作','admin.php?controller=admin&method=login');
//		}
//		$res = M('comments')->commentsubmit($_POST,$this->auth['username']);
//		if($res==0){
//			$this->showmessage('操作失败','index.php?controller=index&method=newsshow&id='.$_POST['newsId']);
//		}
//		if($res==1){
//			$this->showmessage('添加成功','index.php?controller=index&method=newsshow&id='.$_POST['newsId']);
//		}
//	}
	
	//收藏功能
	public function collect(){
		$authobj = M('auth');
		$this -> auth = $authobj -> getauth();
		if(empty($this->auth)){
			$this->showmessage('请登录后再操作','admin.php?controller=admin&method=login');
		}
		$res = M('collect')->collectnews($_GET['id'], $this->auth['username']);
		if($res){
			$this->showmessage('收藏成功', 'index.php?controller=index&method=newsshow&id='.$_GET['id']);
		}
	}
	
	private function showmessage($info, $url) {
		echo "<script>alert('$info');window.location.href='$url'</script>";
		exit ;
	}
	
}
?>