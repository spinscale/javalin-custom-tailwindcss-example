import io.javalin.Javalin;
import io.javalin.http.staticfiles.Location;

public class Server {

    public static void main(String[] args) {
        Javalin app = Javalin.create(config -> {
            config.addStaticFiles("/", "build/resources/main/html", Location.EXTERNAL);
            config.addStaticFiles("/css", "build/resources/css", Location.EXTERNAL);
        });
        app.start(7000);
    }
}