package com.checklist;

import android.support.annotation.Nullable;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;

import java.util.List;

public class MainApplication extends NavigationApplication {
    @Override
     public boolean isDebug() {
         // Make sure you are using BuildConfig from your own application
         return BuildConfig.DEBUG;
     }

   @Nullable
   @Override
     public List<ReactPackage> createAdditionalReactPackages() {
         return null;
     }
}
