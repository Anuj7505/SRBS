import { Component, OnInit, HostListener } from '@angular/core';

export interface Certificate {
   name: string;
   ref: string;
   file: string;
   icon: string;
}

@Component({
  selector: 'app-data-hosting',
  templateUrl: './data-hosting.component.html',
  styleUrls: ['./data-hosting.component.scss']
})
export class DatahostingComponent {

  constructor() { }

  ngOnInit(): void {
    // Block right-click
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });

    // Block PrintScreen (basic)
    document.addEventListener('keyup', (e) => {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Screenshot is not allowed.');
      }
    });

    // Block DevTools keys
    document.addEventListener('keydown', (e) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) || // Ctrl+Shift+I/J/C
        (e.ctrlKey && e.key === 'U') // Ctrl+U
      ) {
        e.preventDefault();
      }
    });
  }

  certificates: Certificate[] =[
      {
        name: 'DARPAN NGO ID',
        ref: 'UP/2022/0327080',
        file: 'NGO Darpan.pdf',
        icon: 'id-card'
      },

      {
        name: 'PAN',
        ref: 'ABETS9683G',
        file: 'PAN_ABETS9683G.pdf',
        icon: 'file-invoice'
      },

      {
      name: '80G Registration',
      ref: 'ABETS9683GF20231',
      file: '80G_ABETS9683GF20231.pdf',
      icon: 'shield-alt'
    },

    {
      name: '12A Registration',
      ref: 'ABETS9683GE20221',
      file: '12A_ABETS9683GE20221.pdf',
      icon: 'check-circle'
    }
  ];

   currentCert?: Certificate;

  openPreview(cert: Certificate, modal: any) {
    this.currentCert = cert;
    modal.show();
  }

}
