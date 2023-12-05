


$(document).ready(function () {

    const customMenu = (node) => {
        
        return{
            "Create" : {
                "separator_before" : false,
                "separator_after" : false,
                "label" : "Agregar",
                "action" : function (obj) {
                    console.log("se agrega un nodo " + obj);
                    addNewNode(node.id);
                }
            },
            "delete" : {
                "separator_before" : false,
                "separator_after" : false,
                "label" : "Eliminar",
                "action" : function (obj) {
                    console.log("se elimina un nodo");
                }
            }
        }
    }

    //para agregar un nuevo nodo
    const addNewNode = (node) => {
        var nodeName = prompt("Indique el nombre del nuevo nodo:", "Nuevo nodo");
        var nodeId = node;
        if(nodeName){
            $('#html1').jstree('create_node', '#' + nodeId, {"text" : nodeName }, "last", false);
        }
    }

    $('#html1').jstree({
        "core" : {
            "check_callback" : true
        },
        "plugins" : ["contextmenu"],
        "contextmenu": { "items" : customMenu }
    });

    $('#html1').on('changed.jstree',function(e,data){
        console.log("node selected", data.selected);
    });

    $('#html1').on('open_node.jstree', function (e, data) {
        console.log("Nodo abierto: ", data.node);
    });

    $('#btnHola').on('click',function () {
       console.log("hola mundo");
    });

});