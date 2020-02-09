//1.	Stwórz komponent Parent,
// 2.	Stwórz komponent NestedInParent, który będzie otrzymywał od parent dane nt. Imienia i Nazwiska autora skryptu (mogą być ręcznie wpisane w kodzie). Komponent
// NestedInParent powinien być tworzony (wkomponowany) w komponent parent (użyj this.props).
// 3.	Stwórz trzeci komponent o nazwie LowestChild, który będzie otrzymywał od NestedInParent dane nt. Imienia i Nazwiska autora skryptu (użyj this.props) oraz je wyświetlał.
//
// Pamiętaj, że dane mają być zdefiniowane jedynie w parent. Od parent są one przekazywane w dół do NestedInParent, a z  NestedInParent do  LowestChild.
// W przypadku każdego przekazania w dół należy użyć mechanizmu props (this.props).


import React from 'react';
import NestedInParent from "./nestedInParent";

export default class Parent extends React.Component {
        render() {

        const author = {name: "Ida", surname: "Nieznane"};
        return (
            <div>
                <NestedInParent display={author}/>
            </div>
        );

    }
}