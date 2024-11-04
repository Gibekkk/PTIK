route = "home";
url = window.location.href.split("/");
path = url[url.length - 1];
available_paths = ["home", "cv", "projects"];
if(!available_paths.includes(path) || !path){
    path = route
}

