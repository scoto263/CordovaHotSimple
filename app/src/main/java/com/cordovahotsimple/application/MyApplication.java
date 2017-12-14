package com.cordovahotsimple.application;

import android.app.Application;
import android.content.Context;

/**
 * @author 李泽锋
 * @Description:
 * @date 2017年12月14日-10时06分
 */
public class MyApplication extends Application {

    private Context context;

    @Override
    public void onCreate() {
        super.onCreate();
        this.context=getApplicationContext();
    }
}
