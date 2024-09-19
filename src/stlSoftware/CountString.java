// Count Strings in the array list of strings.
import java.util.*;
class CountString{

	public static void main(String[] args){
		
		ArrayList<String> al = new ArrayList<String>();
		al.add("delhi");
		al.add("delhi");
		al.add("mumbai");
		al.add("mumbai");
		al.add("mumbai");
		al.add("kolkata");
		
		HashMap<String, Integer> hm = new HashMap<String, Integer>();
		
		for(String s:al){
			if(hm.containsKey(s)){
				hm.put(s, hm.get(s)+1);
			}
			else{
				hm.put(s,1);
			}
			
		}
		System.out.println("hm: "+hm);
		
		al.stream().distinct().forEach(val->System.out.println(val));
		
		
		
	}



}
