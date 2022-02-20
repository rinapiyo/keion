package controllers;

import play.mvc.*;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {


    private String MAIN_VIEW_TITLE_TEXT = "XXX";

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
/*    public Result index() {
        return ok(views.html.index.render());
    }*/

	public Result main() {
        return ok(views.html.index.render(MAIN_VIEW_TITLE_TEXT));
    }
    public Result aika() {
        return ok(views.html.yanagi.render(MAIN_VIEW_TITLE_TEXT));
    }
}
