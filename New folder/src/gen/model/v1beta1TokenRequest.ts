/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.21.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
* TokenRequest contains parameters of a service account token.
*/
export class V1beta1TokenRequest {
    /**
    * Audience is the intended audience of the token in \"TokenRequestSpec\". It will default to the audiences of kube apiserver.
    */
    'audience': string;
    /**
    * ExpirationSeconds is the duration of validity of the token in \"TokenRequestSpec\". It has the same default value of \"ExpirationSeconds\" in \"TokenRequestSpec\"
    */
    'expirationSeconds'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "audience",
            "baseName": "audience",
            "type": "string"
        },
        {
            "name": "expirationSeconds",
            "baseName": "expirationSeconds",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1TokenRequest.attributeTypeMap;
    }
}

