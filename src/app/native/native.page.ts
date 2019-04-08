import { Component, OnInit } from '@angular/core';
import {BatteryStatus} from '@ionic-native/battery-status/ngx';
import {Network} from '@ionic-native/network/ngx';

@Component({
  selector: 'app-native',
  templateUrl: './native.page.html',
  styleUrls: ['./native.page.scss'],
})


export class NativePage implements OnInit {


  constructor(private batteryStatus: BatteryStatus, private network: Network) {
    this.initBatteryStatus();
    this.initNetwork()
  }

  public batStat: String;
  public networkStat: String;


  ngOnInit() {
  }

  initBatteryStatus(): void {
    const subscription = this.batteryStatus.onChange().subscribe(status => {
      this.batStat = String(status.level);
    });
  }

  initNetwork(): void {
    const connectSubscription = this.network.onConnect().subscribe(() => {
        this.networkStat = "Not Connected";
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          this.networkStat = "Connected with wifi";
        } else {
          this.networkStat = "Connected with Cellular";
        }
      }, 3000);
    });
  }






}
