package gc.spring.day01a.controller;

import gc.spring.day01a.utils.MyException;
import io.swagger.annotations.ApiOperation;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HelloController {

//    @ApiOperation(value="入口",notes = "just a test")
//    @RequestMapping("/")
//    public String index(ModelMap map) {
//        map.addAttribute("host", "http: // 123.com");
//        return "hello/test";
//    }
//
//    @RequestMapping(value = "/hello", method = RequestMethod.GET)
//    public String hello() throws Exception{
//        throw new Exception("发生错误");
//    }
//
//    @RequestMapping(value = "/json", method = RequestMethod.GET)
//    public String json() throws MyException{
//        throw new MyException("发生错误2");
//    }

    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping("/hello")
    public String hello() {
        return "hello";
    }

    @RequestMapping(value = "/login")
    public String login() {
        return "login";
    }
}
