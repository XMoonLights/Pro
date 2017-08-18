<?php
	class newsModel{
		public $table ='news';

		function count(){
			$sql = 'select count(*) from '.$this->table;
//			$res = DB::query($sql);
			
			return DB::findResult($res,0,0);
		}
		
		//单条news详情
		public function getnewsinfo($id){
			if(empty($id)){
				return array();
			}else{
				$id = intval($id);//防止sql注入，讲字符串转换成数字类型
				$sql= 'select * from '.$this->table.' where id='.$id;
				
				$data = DB::findOne($sql);
				$data['dateline']=date('Y-m-d H:i:s',$data['dateline']);
				return $data;
			}
		}

		public function newssubmit($data,$author){
			extract($data);//讲data数组转换成一个个键值对
			if(empty($title)||empty($content)){
				return 0;
			}
			
			$title = addslashes($title);
			$content = addslashes($content);
			$data = array(
				'title'=>$title,
				'content'=>$content,
				'author'=>$author,
				'tag'=>$tag,
				'dateline'=>time()
				);

			if($_POST['id']!=''){
				DB::update($this->table,$data,'id='.$id);
				return 2;
			}else{
				DB::insert($this->table,$data);
				return 1;
			}
		}
		//删除news
		public function delete_by_id($id){
			$sql = 'delete from '.$this->table.' where id = '.intval($id);
			return DB::query($sql);
		}
		
		public function findAll_orderby_author($author){
			$sql = 'select * from '.$this->table.' where author = "'.$author.'"';
			$data = DB::findAll($sql);
			foreach ($data as $key => $value) {
				$data[$key]['content'] = mb_substr(strip_tags($data[$key]['content']),0,200);
				$data[$key]['dateline']=date('Y-m-d H:i:s',$data[$key]['dateline']);
			}
			return $data;
		}

		public function findAll_orderby_dateline(){
			$sql = 'select * from '.$this->table.' order by dateline desc';
			return DB::findAll($sql);
		}
		//查询所有结果，显示列表
		public function get_news_list(){
			$data = $this->findAll_orderby_dateline();
			foreach ($data as $key => $value) {
//				$pattern='/[\s\t\r\n]/';
				$data[$key]['content'] = mb_substr(strip_tags($data[$key]['content']),0,200);
//				 print_r(strip_tags($data[$key]['content']));
				$data[$key]['dateline']=date('Y-m-d H:i:s',$data[$key]['dateline']);
//				$data[$key]['dateline']=$data[$key]['dateline'];
				
			}
			return $data;
		}
		
		//模糊查询
		public function getnews_by_title($title){
			$sql = 'select * from '.$this->table.' where title like "%'.$title.'%"';
			$data = DB::findAll($sql);
			foreach ($data as $key => $value) {
				$data[$key]['content'] = mb_substr(strip_tags($data[$key]['content']),0,200);
				$data[$key]['dateline']=date('Y-m-d H:i:s',$data[$key]['dateline']);
			}
			return $data;
		}
		
		public function getnews_by_tag($tag){
			$sql = 'select * from '.$this->table.' where tag = "'.$tag.'" order by dateline desc';
			$data = DB::findAll($sql);
			foreach ($data as $key => $value) {
				$data[$key]['content'] = mb_substr(strip_tags($data[$key]['content']),0,200);
				$data[$key]['dateline']=date('Y-m-d H:i:s',$data[$key]['dateline']);
			}
			return $data;
		}
		
	}