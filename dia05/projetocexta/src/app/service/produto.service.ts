import { Injectable } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { Subject } from 'rxjs/internal/Subject';

//lista de produtos
const PRODUTOS: Produto[] = [
    {
        nome:"Fifa 19",
        descricao:"Jogo chato dos infernos",
        preco:44.99,
        imagem:"https://images.yaoota.com/z5RYo66PJWGnpOxqySDcf7QuwBc=/trim/yaootaweb-production-ae/media/crawledproductimages/7f84cbaa2c7c7c08b524da4c0df177a9872ea6d8.jpg"
    },
    {
        nome:"Marvel's Spider-Man",
        descricao:"Melhor jogo do miranha",
        preco:98.99,
        imagem:"https://http2.mlstatic.com/combo-5-jogos-ps4-midia-fisica-lacrado-original-promoco-D_NQ_NP_869331-MLB29356876510_022019-F.jpg"
    },
    {
        nome:"Days Gone",
        descricao:"Parece um bom jogo",
        preco:99.99,
        imagem:"https://cdn.awsli.com.br/600x450/989/989179/produto/36442364/b6aae234cb.jpg"
    },
    {
        nome:"God Of War",
        descricao:"Não merecia jogo do ano",
        preco:98.99,
        imagem:"https://cdn.ecvol.com/s/www.e-gamesbrasil.com.br/produtos/god-of-war-jogo-ps4/m/0.jpg"
    },
    {
        nome:"Grand Theft Auto V",
        descricao:"Não faz sentido o preço depois de 6 anos de lançamento do jogo",
        preco:119.99,
        imagem:"https://www.balbinoshop.com.br/media/catalog/product/cache/1/image/800x/040ec09b1e35df139433887a97daa66f/g/r/grand-theft-auto-v_21.jpg"
    },
    {
        nome:"God Of War 3",
        descricao:"Chato demais",
        preco:19.99,
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJRJeBun_7bCMyYSSiUcUF9yqVZ1qApzYx9EvUMavuJdll2vjR"
    }
] as Produto[];

//produtos que serão clicados e ficarão na cesta
const PRODUTOS_CESTA: Produto[]=[];

@Injectable()
export class ProdutoService {

    //contador para pegar os cliques no produto e jogar na cesta de compras
    count: Subject<number> = new Subject<number>();

    constructor(){

    }

    //método para adicionar produtos na cesta
    public adicionarCesta(produto: Produto){
        //chama a constante da cesta e adiciona(push) no vetor
        PRODUTOS_CESTA.push(produto);
        //consta o tamanho do vetor (quantidade de produtos adiconados)
        this.count.next(PRODUTOS_CESTA.length);
        //alert(PRODUTOS_CESTA.length);
    }

    //método para listar os produtos
    public listagemProdutos(): Produto[]{
        return PRODUTOS;
    }

    //método para remover o produto da cesta pelo index
    public removerProduto(index: number){
        PRODUTOS_CESTA.splice(index, 1);
        this.count.next(PRODUTOS_CESTA.length);
    }

    //método para listar os produtos adicionados na cesta
    public listaCesta(): Produto[]{
        return PRODUTOS_CESTA;
    }

    public quantidade(): Subject<number>{
        return this.count;
    }

}