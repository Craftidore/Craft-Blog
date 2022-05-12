((global:any) => {
    var yaml:any = {};
    var getFromFile = function(markdown:string):string {
        var yamlFrontmatter = /^---(\r|\n)((.|\r|\n)+)---/i.exec(markdown)
        if (yamlFrontmatter) {
            return yamlFrontmatter[2];
        }
        else {// pointless else, but added for clarification
            return "yaml: false"
        }
    }
    var parse = function(yml:string):void {
        return jsyaml.load(yml);
    }
    yaml.parseFromFile = function(markdown:string) {
        parse(getFromFile(markdown));
    }
    global.yaml = yaml;

})(window);