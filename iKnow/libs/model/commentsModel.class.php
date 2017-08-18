<?php
	class commentsModel{
		public $table = 'comments';
		
		//根据newsId查询相应comments信息
		public function getcommentsinfo($newsId){
			if(empty($newsId)){
				return array();
			}else{
				$newsId = intval($newsId);//防止sql注入，讲字符串转换成数字类型
				$sql= 'select * from '.$this->table.' where newsId='.$newsId;
				
				$data = DB::findAll($sql);
				foreach ($data as $key => $value) {
					$data[$key]['dateline']=date('Y-m-d H:i:s',$data[$key]['dateline']);
				}
//				$data['dateline']=date('Y-m-d h:i:s',$data['dateline']);
				return $data;
			}
		}
		
		public function commentsubmit($data,$author){
			extract($data);//讲data数组转换成一个个键值对
			if(empty($data['content'])){
				return 0;
			}
			
			$newsId = $data['newsId'];
			$content = $data['content'];

			$data = array(
				'author'=>$author,
				'content'=>$content,
				'newsId'=>$newsId,
				'dateline'=>time()
				);

			if($newsId!=''){
				DB::insert($this->table,$data);
				return 1;
			}
		}
		
	}
?>