package de.olivertwist.restservice.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class TestController {
	
	@GetMapping(value="/test")
	public String getAllGameDates() {
		return "The Controller is working!!!";
	}

}
