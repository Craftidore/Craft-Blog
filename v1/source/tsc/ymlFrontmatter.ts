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
        var parsedYaml:any = parse(getFromFile(markdown));
        if (parsedYaml.yaml === undefined) {
            //`yaml: true` unless explicitely stated as `yaml: false` in the frontmatter
            parsedYaml.yaml = true;
        }
        return parsedYaml
    }
    yaml.removeFrontmatter = function(markdown:string) {
        var yamlFrontmatter = /^---(\r|\n)((.|\r|\n)+)---(\r|\n)((.|\r|\n)+)/i.exec(markdown)
        if (yamlFrontmatter) {
            return yamlFrontmatter[5];
        }
        else {// pointless else, but added for clarification
            return markdown;
        }
    }
    global.yaml = yaml;

})(window);