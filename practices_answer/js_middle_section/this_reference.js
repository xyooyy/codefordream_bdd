function Tool(name, usage){
    this.name = name;
    this.usage = usage;
    this.get_info = function() {console.log("This is " + this.name + ", the usage of it is " + this.usage + ".")}
}
var cycling = new Tool("cycling","transport");
cycling.get_info()