import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';


export const getDataAPI = {
    getProfileInfo() {
        return bridge.send("VKWebAppGetUserInfo", {}).then(
            response => {
                let userId = response.id;
                return bridge.send("VKWebAppGetAuthToken", {"app_id": 7542538, "scope": "friends"}).then(
                    response => {
                        return bridge.send("VKWebAppCallAPIMethod",
                            {
                                "method": "users.get", "request_id": "32test",
                                "params": {
                                    "user_ids": userId, "v": "5.120",
                                    "fields": "counters,bdate,photo_200",
                                    "access_token": response.access_token
                                }
                            }).then(response => response.response[0])
                    });
            }
        ).catch( reason => {throw new Error("Error Auth User: " + reason)} );
    },

    getFriends(pageSize, offsetSize) {
        return bridge.send("VKWebAppGetUserInfo", {}).then(
            response => {
                let userId = response.id;
                return bridge.send("VKWebAppGetAuthToken", {"app_id": 7542538, "scope": "friends"}).then(
                    response => {
                        return bridge.send("VKWebAppCallAPIMethod",
                            {
                                "method": "friends.get","request_id": "32test",
                                "params": {
                                    "user_ids": userId, "v": "5.120",
                                    "order": "hints",
                                    "count": pageSize,
                                    "offset": offsetSize,
                                    "fields": "counters,bdate,photo_200",
                                    "access_token": response.access_token
                                }
                            }).then(response => response.response)
                    }
                )
            }).catch( reason => {throw new Error("Error Auth User: " + reason)} );
    }

};

