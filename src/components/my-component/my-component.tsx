import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'lb2-component',
  styleUrl: 'my-component.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class MyComponent {
  @Prop() name: string;
  @Prop() icon: string;
  @Prop() value: number = 0;
  @Prop() maxValue: number = 100;
  @Prop() lung: number = 0;
  @Prop() break: number = 0;

  @Element() el: HTMLElement;

  private getColor(): string {
    const $blue = '#0090ff';
    const $red = '#ea003f';
    const $yellow = '#faff2e';
    const porcentage = (this.value * 100) / this.maxValue;

    if (porcentage < 80) return $blue;
    if (porcentage >= 80 && porcentage < 90) return $yellow;
    if (porcentage >= 90) return $red;
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
  }

  render() {
    this.el.style.setProperty('--color', this.getColor());
    this.el.style.setProperty('--value', this.value.toString());
    this.el.style.setProperty('--maxValue', this.maxValue.toString());

    return (
      <ion-grid class="sticky">
        <ion-row class="firstLine">
          <ion-col>
            <div>
              <span class="name">{this.name}</span>
            </div>
          </ion-col>
          <ion-col>
            <div class="ion-text-end">
              <span class="value ">
                {this.value}
                <span class="porcentagem">%</span>
                <span class="ocupacao">OCUPAÇÃO</span>
              </span>
            </div>
          </ion-col>
        </ion-row>
        <ion-row class="meio">
          <ion-col>
            <div class="mainSvg ">
              <svg width="69" height="66" viewBox="0 0 69 66">
                <g id="limpeza" clip-path="url(#clip-limpeza)">
                  <g id="_002-broom" data-name="002-broom" transform="translate(-9.975 5.637)">
                    <path
                      id="Path_563"
                      data-name="Path 563"
                      d="M56.373,48.826a27.379,27.379,0,0,1-1.783-7h.818a.665.665,0,0,0,.665-.665,8.375,8.375,0,0,0-8.365-8.365h-.285V31.177a.665.665,0,0,0-.665-.665h-.475V6.556a1.806,1.806,0,1,0-3.612,0V30.511h-.475a.665.665,0,0,0-.665.665v1.616h-.285a8.375,8.375,0,0,0-8.365,8.365.665.665,0,0,0,.665.665h.818a27.346,27.346,0,0,1-1.784,7,.666.666,0,0,0,.586.982H55.787a.665.665,0,0,0,.585-.983ZM44,6.556a.475.475,0,1,1,.951,0V30.511H44ZM42.86,31.842h3.232v.951H42.86Zm-1.616,2.281h6.464a7.045,7.045,0,0,1,7,6.369H34.241a7.045,7.045,0,0,1,7-6.369ZM51.691,48.478a13.967,13.967,0,0,1-.808-2.865.666.666,0,1,0-1.311.232,16.729,16.729,0,0,0,.69,2.633H48.126a20.245,20.245,0,0,1-.773-4.318.665.665,0,0,0-1.322.145,25.378,25.378,0,0,0,.692,4.174H41.79a15,15,0,0,0,.465-2.688.666.666,0,0,0-1.326-.121,13.5,13.5,0,0,1-.522,2.809H38.042a39.35,39.35,0,0,0,.915-4.209.665.665,0,0,0-1.314-.213,37.448,37.448,0,0,1-.986,4.422H34.182A34.353,34.353,0,0,0,35.7,41.824H53.247a34.277,34.277,0,0,0,1.521,6.654Z"
                    />
                    <path id="Path_564" data-name="Path 564" d="M60.67,87.75H53.54a.665.665,0,0,0,0,1.331h7.13a.665.665,0,1,0,0-1.331Z" transform="translate(-12.629 -51.44)" />
                  </g>
                </g>
              </svg>
            </div>
          </ion-col>
          <ion-col>
            <ion-row class="firstLine">
              <ion-col>
                <div class="lung">
                  <svg width="25" height="23" viewBox="0 0 69 66">
                    <g id="pulmao" clip-path="url(#clip-pulmao)">
                      <g id="_007-store" data-name="007-store" transform="translate(5 4)">
                        <path
                          id="Path_578"
                          data-name="Path 578"
                          d="M49.658,22.444H3.222a1.222,1.222,0,0,1,0-2.444H49.658a1.222,1.222,0,0,1,0,2.444Z"
                          transform="translate(2.888 28.88)"
                        />
                        <path
                          id="Path_579"
                          data-name="Path 579"
                          d="M49.658,11.444H3.222A1.222,1.222,0,1,1,3.222,9H49.658a1.222,1.222,0,0,1,0,2.444Z"
                          transform="translate(2.888 12.996)"
                        />
                        <path
                          id="Path_580"
                          data-name="Path 580"
                          d="M30.33,32.552H13.222A1.222,1.222,0,0,1,12,31.33V14.222A1.222,1.222,0,0,1,13.222,13H30.33a1.222,1.222,0,0,1,1.222,1.222V31.33A1.222,1.222,0,0,1,30.33,32.552ZM14.444,30.108H29.108V15.444H14.444Z"
                          transform="translate(17.328 18.772)"
                        />
                        <path
                          id="Path_581"
                          data-name="Path 581"
                          d="M16.722,22.776A1.222,1.222,0,0,1,15.5,21.554V14.222a1.222,1.222,0,0,1,2.444,0v7.332A1.222,1.222,0,0,1,16.722,22.776Z"
                          transform="translate(22.382 18.772)"
                        />
                        <path
                          id="Path_582"
                          data-name="Path 582"
                          d="M23.33,21.552H6.222A1.222,1.222,0,0,1,5,20.33V3.222A1.222,1.222,0,0,1,6.222,2H23.33a1.222,1.222,0,0,1,1.222,1.222V20.33A1.222,1.222,0,0,1,23.33,21.552ZM7.444,19.108H22.108V4.444H7.444Z"
                          transform="translate(7.22 2.888)"
                        />
                        <path
                          id="Path_583"
                          data-name="Path 583"
                          d="M9.722,11.776A1.222,1.222,0,0,1,8.5,10.554V3.222a1.222,1.222,0,1,1,2.444,0v7.332A1.222,1.222,0,0,1,9.722,11.776Z"
                          transform="translate(12.274 2.888)"
                        />
                        <path
                          id="Path_584"
                          data-name="Path 584"
                          d="M19.886,31.108H5.222A1.222,1.222,0,0,1,4,29.886V15.222A1.222,1.222,0,0,1,5.222,14H19.886a1.222,1.222,0,0,1,1.222,1.222V29.886A1.222,1.222,0,0,1,19.886,31.108ZM6.444,28.664h12.22V16.444H6.444Z"
                          transform="translate(5.776 20.216)"
                        />
                        <path
                          id="Path_585"
                          data-name="Path 585"
                          d="M8.222,21.332A1.222,1.222,0,0,1,7,20.11V15.222a1.222,1.222,0,1,1,2.444,0V20.11A1.222,1.222,0,0,1,8.222,21.332Z"
                          transform="translate(10.108 20.216)"
                        />
                        <path
                          id="Path_586"
                          data-name="Path 586"
                          d="M6.11,58.656H1.222A1.222,1.222,0,0,1,0,57.434V1.222A1.222,1.222,0,0,1,1.222,0H6.11A1.222,1.222,0,0,1,7.332,1.222V57.434A1.222,1.222,0,0,1,6.11,58.656ZM2.444,56.212H4.888V2.444H2.444Z"
                        />
                        <path
                          id="Path_587"
                          data-name="Path 587"
                          d="M27.11,58.656H22.222A1.222,1.222,0,0,1,21,57.434V1.222A1.222,1.222,0,0,1,22.222,0H27.11a1.222,1.222,0,0,1,1.222,1.222V57.434A1.222,1.222,0,0,1,27.11,58.656Zm-3.666-2.444h2.444V2.444H23.444Z"
                          transform="translate(30.324)"
                        />
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
                  <svg width="25" height="23" viewBox="0 0 69 66">
                    <g id="ruptura" clip-path="url(#clip-ruptura)">
                      <g id="_006-crack" data-name="006-crack" transform="translate(12 7)">
                        <g id="Group_920" data-name="Group 920" transform="translate(0 0)">
                          <g id="Group_919" data-name="Group 919">
                            <path
                              id="Path_576"
                              data-name="Path 576"
                              d="M75.107.435a1.009,1.009,0,0,0-1.25-.343L40.71,15.274a1.009,1.009,0,0,0,.42,1.926H51.484L32.135,30.957a1.009,1.009,0,0,0,.585,1.831h9.51L30.481,49.437a1.009,1.009,0,0,0,1.358,1.438L67.926,28.411a1.008,1.008,0,0,0-.429-1.859l-.023,0-.065,0h-.014l-9.936-.014L73.125,13.67a1.009,1.009,0,0,0-.64-1.789h0l-7.75,0L74.987,1.725A1.009,1.009,0,0,0,75.107.435ZM43.168,41.446,35,46.529l8.164-11.57ZM53.635,27.534h0v7.4l-8.449,5.26V31.78c0-.015,0-.03,0-.044s0-.025,0-.037a1,1,0,0,0-.05-.243l-.009-.026a1.032,1.032,0,0,0-.044-.1l-.006-.013,0,0A.989.989,0,0,0,45,31.2l-.017-.023q-.029-.039-.062-.076L44.9,31.08A1,1,0,0,0,44.815,31l-.013-.009a1.025,1.025,0,0,0-.089-.062l-.026-.016a1.014,1.014,0,0,0-.1-.051l-.01,0a1.007,1.007,0,0,0-.119-.042l-.024-.006a.993.993,0,0,0-.1-.021l-.032,0a1,1,0,0,0-.127-.009h-8.3l12.031-8.555v5.9a1.009,1.009,0,0,0,2.018,0V20.781l3.705-2.635v9.387Zm10.236,1.024-8.218,5.116V28.547ZM69.663,13.9,63.29,19.133V13.9ZM61.571,12.18h0a1.019,1.019,0,0,0-.088.1l-.018.025a1.023,1.023,0,0,0-.071.112l0,0a.981.981,0,0,0-.053.119l-.009.025a1.007,1.007,0,0,0-.053.259c0,.012,0,.024,0,.035s0,.024,0,.036V20.79L55.653,25.4V16.2h0v-.009s0-.009,0-.013q0-.038,0-.077c0-.011,0-.021,0-.032s-.005-.039-.009-.059,0-.024-.007-.036-.009-.036-.014-.054-.006-.024-.01-.036h0c-.009-.027-.018-.053-.029-.079l-.015-.033c-.008-.017-.015-.033-.024-.05l-.018-.031c-.009-.016-.019-.033-.03-.049l-.018-.027c-.012-.018-.025-.034-.038-.051l-.016-.02a1,1,0,0,0-.126-.126l-.022-.018-.048-.036-.029-.019-.047-.029-.031-.018-.057-.028-.033-.015-.07-.026-.035-.01-.054-.014-.036-.007-.06-.009-.031,0c-.031,0-.062,0-.093,0H45.756L69.529,4.293Z"
                              transform="translate(-30.296 0)"
                            />
                          </g>
                        </g>
                        <g id="Group_922" data-name="Group 922" transform="translate(17.65 30.771)">
                          <g id="Group_921" data-name="Group 921">
                            <path
                              id="Path_577"
                              data-name="Path 577"
                              d="M208.362,308.744a1.01,1.01,0,0,0,0,2.018A1.01,1.01,0,0,0,208.362,308.744Z"
                              transform="translate(-207.387 -308.744)"
                            />
                          </g>
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
