package controllers;

import java.util.Random;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	Random random = new Random();
	
	@RequestMapping(value = "/")
	public String goHome() {
		System.out.println("going through index...");
		return "WEB-INF/JSP/index.jsp";
	}
}
