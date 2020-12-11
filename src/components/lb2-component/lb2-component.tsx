import { Component, Prop, h, Element, Watch } from '@stencil/core';

@Component({
  tag: 'lb2-component-hd',
  styleUrl: 'lb2-component.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class Lb2Component {
  @Prop() name: string;
  @Prop() image: string;
  @Prop() value: number;
  @Prop() maxValue: number;
  @Prop() lung: number = 0;
  @Prop() break: number = 0;

  @Watch('value')
  watchHandlerValue() {
    this.forceUpdate();
  }
  @Watch('maxValue')
  watchHandlerMax() {
    this.forceUpdate();
  }
  @Element() el: HTMLElement;

  private getColor(): string {
    const $blue = '#0090ff';
    const $red = '#ea003f';
    const $yellow = '#faff2e';
    const porcentage = (this.value * 100) / this.maxValue;
    console.log(porcentage);
    if (porcentage < 80) return $blue;
    if (porcentage >= 80 && porcentage < 90) return $yellow;
    if (porcentage >= 90) return $red;
    return $blue;
  }
  private forceUpdate() {
    this.el.style.setProperty('--color', this.getColor());
    this.el.style.setProperty('--value', this.value.toString());
    this.el.style.setProperty('--maxValue', this.maxValue.toString());
  }

  componentDidLoad() {
    // Add custom font to page DOM since font-face doesn't work within Shadow DOM.
    const fontCssUrl = 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap';
    let element = document.querySelector(`link[href="${fontCssUrl}"]`);

    // Only inject the element if it's not yet present
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', 'stylesheet');
      element.setAttribute('href', fontCssUrl);
      document.head.appendChild(element);
    }
    this.forceUpdate();
  }

  render() {
    return (
      <ion-grid class="sticky">
        <ion-row class="firstLine">
          <ion-col size="7">
            <div>
              <span class="name">{this.name}</span>
            </div>
          </ion-col>
          <ion-col>
            <div class="ion-text-end">
              <span class="value ">
                {Math.round((this.value * 100) / this.maxValue)}
                <span class="porcentagem">%</span>
                <span class="ocupacao">TOTAL HORAS</span>
              </span>
            </div>
          </ion-col>
        </ion-row>
        <ion-row class="meio">
          {this.image != null ? (
            <ion-col>
              <div class="mainSvg ">
                <img src={this.image} width="60" />
              </div>
            </ion-col>
          ) : (
            <ion-col>
              <div class="mainSvg "></div>
            </ion-col>
          )}

          <ion-col>
            <ion-row class="firstLine">
              <ion-col>
                <div class="lung">
                  <svg width="25" height="23">
                    <defs>
                      <clipPath id="clip-path">
                        <path
                          id="_Icon_Сolor"
                          data-name="🎨 Icon Сolor"
                          d="M14.284,20H2.715A2.617,2.617,0,0,1,0,17.5V2.5A2.617,2.617,0,0,1,2.715,0h7.438a1.1,1.1,0,0,1,.787.328l5.784,6A.97.97,0,0,1,17,7V17.5A2.618,2.618,0,0,1,14.284,20ZM2.715,2a.551.551,0,0,0-.59.5v15a.551.551,0,0,0,.59.5h11.57a.552.552,0,0,0,.591-.5V8H11.383A2.87,2.87,0,0,1,8.5,5.15V2Zm7.91.978V5.15A.809.809,0,0,0,11.383,6h2.155ZM11.687,16H5.312a1,1,0,1,1,0-2h6.375a1,1,0,1,1,0,2ZM8.5,12H5.312a1,1,0,1,1,0-2H8.5a1,1,0,1,1,0,2Z"
                          transform="translate(0.105 0)"
                        />
                      </clipPath>
                    </defs>
                    <g id="Abertos" clip-path="url(#clip-Abertos)">
                      <g id="_27_Icon_file-text" data-name="27) Icon/file-text" transform="translate(2.896 1)">
                        <g id="Group_218" data-name="Group 218" transform="translate(0 0)">
                          <path
                            id="_Icon_Сolor-2"
                            data-name="🎨 Icon Сolor"
                            d="M14.284,20H2.715A2.617,2.617,0,0,1,0,17.5V2.5A2.617,2.617,0,0,1,2.715,0h7.438a1.1,1.1,0,0,1,.787.328l5.784,6A.97.97,0,0,1,17,7V17.5A2.618,2.618,0,0,1,14.284,20ZM2.715,2a.551.551,0,0,0-.59.5v15a.551.551,0,0,0,.59.5h11.57a.552.552,0,0,0,.591-.5V8H11.383A2.87,2.87,0,0,1,8.5,5.15V2Zm7.91.978V5.15A.809.809,0,0,0,11.383,6h2.155ZM11.687,16H5.312a1,1,0,1,1,0-2h6.375a1,1,0,1,1,0,2ZM8.5,12H5.312a1,1,0,1,1,0-2H8.5a1,1,0,1,1,0,2Z"
                            transform="translate(0.105 0)"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <div class="fillFirstLine "></div>
                </div>
              </ion-col>
              <ion-col class="lung">{this.lung}</ion-col>
            </ion-row>
            <ion-row class="secondLine ">
              <ion-col>
                <div>
                  <svg width="25" height="23">
                    <defs>
                      <clipPath id="clip-path">
                        <path
                          id="_Icon_Сolor"
                          data-name="🎨 Icon Сolor"
                          d="M19.521,20H3.479A3.5,3.5,0,0,1,.411,18.248a3.149,3.149,0,0,1,.048-3.193L8.48,1.667a3.569,3.569,0,0,1,6.04,0l8.021,13.388a3.149,3.149,0,0,1,.048,3.193A3.5,3.5,0,0,1,19.521,20ZM11.5,2.145a1.41,1.41,0,0,0-1.229.611L2.25,16.143a1.027,1.027,0,0,0-.018,1.071,1.392,1.392,0,0,0,1.247.681H19.521a1.392,1.392,0,0,0,1.247-.681,1.027,1.027,0,0,0-.018-1.071L12.729,2.756A1.41,1.41,0,0,0,11.5,2.145Zm0,13.645a1.053,1.053,0,1,1,1.045-1.053A1.05,1.05,0,0,1,11.5,15.79Zm0-3.159a1.05,1.05,0,0,1-1.045-1.053V7.369a1.045,1.045,0,1,1,2.091,0v4.21A1.05,1.05,0,0,1,11.5,12.631Z"
                          transform="translate(0 0)"
                          fill="#262626"
                        />
                      </clipPath>
                    </defs>
                    <g id="Prioridade" clip-path="url(#clip-Prioridade)">
                      <g id="_27_Icon_alert-triangle" data-name="27) Icon/alert-triangle" transform="translate(1 1)">
                        <g id="Group_149" data-name="Group 149" transform="translate(0 0)">
                          <path
                            id="_Icon_Сolor-2"
                            data-name="🎨 Icon Сolor"
                            d="M19.521,20H3.479A3.5,3.5,0,0,1,.411,18.248a3.149,3.149,0,0,1,.048-3.193L8.48,1.667a3.569,3.569,0,0,1,6.04,0l8.021,13.388a3.149,3.149,0,0,1,.048,3.193A3.5,3.5,0,0,1,19.521,20ZM11.5,2.145a1.41,1.41,0,0,0-1.229.611L2.25,16.143a1.027,1.027,0,0,0-.018,1.071,1.392,1.392,0,0,0,1.247.681H19.521a1.392,1.392,0,0,0,1.247-.681,1.027,1.027,0,0,0-.018-1.071L12.729,2.756A1.41,1.41,0,0,0,11.5,2.145Zm0,13.645a1.053,1.053,0,1,1,1.045-1.053A1.05,1.05,0,0,1,11.5,15.79Zm0-3.159a1.05,1.05,0,0,1-1.045-1.053V7.369a1.045,1.045,0,1,1,2.091,0v4.21A1.05,1.05,0,0,1,11.5,12.631Z"
                            transform="translate(0 0)"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <div class="fillSecondLine "></div>
                </div>
              </ion-col>
              <ion-col class="break">{this.break}</ion-col>
            </ion-row>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <div class="progressBar">
              <div class="filler "></div>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    );
  }
}
