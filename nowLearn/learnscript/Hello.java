package cn.dlb.bim;

import cn.dlb.bim.web.ResultUtil;

public class Hello {
	
	
	public static void main(String[] args) {
		System.out.println("hello world");
		
		Hello hi = new Hello();
		
		User1 user = hi.new User1();
		user.name = "张三";
		user.get1Name();
		User2 user2 = hi.new User2();
		user2.get1Name();
	}
	
	
	
	public class User1{
		public String name;
		
		public String get1Name(){
			System.out.println("我是"+ name);
			return "我是"+ name;
		}
		
	}
	
	public class User2{
		public String name;
		
		public String get1Name(){
			System.out.println("我是2");
			return "我是2";
		}
	}
	
}
