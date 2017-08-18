<?php
	class collectModel{
		public $table = 'collect';
		
		//收藏news
		public function collectnews($newsId,$username){
			$sql = 'select * from '.$this->table.' where username = "'.$username.'" and newsId = '.$newsId;
			$res = DB::findAll($sql);
			
			//验证对应newsId的内容用户是否已经收藏了
			if(isset($res)){
				$this->showmessage('已经收藏过了！', 'index.php?controller=index&method=newsshow&id='.$newsId);
			}else{
				$data = array(
				'newsId'=>$newsId,
				'username'=>$username
				);
				DB::insert($this->table, $data);
				return true;
			}
		}
		
		public function findAll_orderby_username($author){
			$sql = 'select * from '.$this->table.' where username = "'.$author.'"';
			$data = DB::findAll($sql);
			$newsobj=M('news');	
			$collect = array();	
			for($num = 0;$num <count($data);$num++){
					$collect[$num] = $newsobj->getnewsinfo($data[$num]['newsId']);
				}
			return $collect;
		}
		
		private function showmessage($info, $url) {
			echo "<script>alert('$info');window.location.href='$url'</script>";
			exit ;
		}
		
	}
?>