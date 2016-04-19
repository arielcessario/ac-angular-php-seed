(function () {
    'use strict';

    angular.module('LangTables', ['ngRoute'])
        .service('initialXlatTables', initialXlatTables);
    function initialXlatTables(){
        return {
            es:{
                ERROR_REQUIRED: 'El campo {{campo}} es requerido.',
                NAME: 'Nombre',
                LAST_NAME: 'Apellido',
                LOGIN: 'Ingresar',
                LOGOUT: 'Salir',
                REGISTER: 'Registrarse',
                DOC_TYPE: 'Tipo de Documento',
                DOC_NO: 'Número de documento',
                EMAIL: 'Email',
                PAGE: 'Página',
                OF: 'de',
                GO_TO: 'Ir a',
                SAVE: 'Guardar',
                CANCEL: 'Cancelar',
                DELETE: 'Eliminar',
                PASSWORD: 'Password',
                YES: 'Si',
                NO: 'No',
                ACTIVE: 'Activo',
                PHONE: 'Teléfono',
                ADDRESS: 'Dirección',
                BRANCH: 'Sucursal',
                POS: 'Caja',
                NEW: 'Nuevo'
            }
        }
    }
})();
