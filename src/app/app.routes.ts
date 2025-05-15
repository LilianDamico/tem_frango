import { Routes } from '@angular/router';
import { HomeComponent } from './modules/principal/pages/home/home.component';
import { PainelComponent } from './modules/principal/pages/painel/painel.component';
import { DashboardComponent } from './modules/principal/components/dashboard/dashboard.component';
import { ProdutosComponent } from './modules/principal/components/produtos/produtos.component';
import { PedidosComponent } from './modules/principal/components/pedidos/pedidos.component';
import { ConfiguracoesComponent } from './modules/principal/components/configuracoes/configuracoes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'painel',
    component: PainelComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'produtos', component: ProdutosComponent },
      { path: 'pedidos', component: PedidosComponent },
      { path: 'configuracoes', component: ConfiguracoesComponent }


    ]
  }
];
