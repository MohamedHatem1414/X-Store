const products = [
  {
    id: 1,
    name: "Premium Wool Coat",
    category: "women",
    price: 299,
    oldPrice: 499,
    discount: 40,
    image: "data:image/jpeg;base64,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",
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
    ],
    colors: ["Black", "Navy Blue", "Camel"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 234,
    description: "Luxurious wool coat crafted from premium Italian wool. Perfect for any occasion.",
    material: "100% Wool",
    care: "Dry clean only",
    fit: "Tailored fit",
    origin: "Italy"
  },
  {
    id: 2,
    name: "Classic White T-Shirt",
    category: "men",
    price: 49,
    oldPrice: 79,
    discount: 38,
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAPEA8QEA8PEBAPEA8QDxAPDw8PFRUWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGBAQFS0dHR0tLS0rKy0tLS0tLS0tLSsrLS0tLS0tLS0tLS0tLS0rLS0tKy0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAABAgUGAAMEB//EAEAQAAIBAgIFCgMFBwMFAAAAAAABAgMRBCEFEjFBUQYTImFxgZGhscEyUmIzQnLh8AcUI3OCkrI0Y/EkQ6LR0v/EABsBAQEAAwEBAQAAAAAAAAAAAAABAgQFAwYH/8QANBEBAAEDAgQDBQcFAQEAAAAAAAECAxEEIQUSMVFBYXEyM4GxwRMiI5Gh0eEUNFLw8SRC/9oADAMBAAIRAxEAPwCUSNh8zgyRAyQUUgYFIGBSC4GwMMsEwywVlgNtCKb1X96y80c/iFvmoirt9Xa4Je5L00f5R+sfxlvw1GEoJNJ7rPqOTEvpgjCEHaKjFJ52tGN+0yzmWXgqmLqwhiZuUlacrZNN33O28sxONmW2S6V1FHK3dvJTnLGvGERyew8p14y1XqKTle2TUW87/iS8DesUTNynbzcrXX6aNNc336fn/G66NHXfGg0UK0EK0DBWgmCtBMFaCYK4jKYI0EwVxLkwRxGUwSUSpgmqXKcsJpHk3TJAFIKZIBrAYkAbAZYDLAZYBllmjGqmKoxMbMqK6qKoqpnEw5qWLdOU4vdLLsln7s4Ort8l2Yjo+y4ddm9p6aqpzPi5+ceJ6LhLVi8m+hC99us737kY26Znxb0zjwV7TeinR/iKMXJpZwqXbeW1tJf8HtFPhlhPeKUPWrzUYxlJaz1nJXbtsMYiMsKpnG648mqWrhaP1KU/7pOS8mjs6eMW4fGcQq5tTXPw/KMJJns0gaARlQGgFaCFaAVhCsIRhCsIRoqEkELYqJk826KAZIBrAGwBQVlgDYDLAZYIywEdpijK3OQveK6SX3oX3daOZr4jmpz45fRcEqnkrjtME0Zi1Om1rW2tarzRzZiaJfQROUNpHUjrOU5ztdJyle3cZRVVUVYhUp3qT2vN59htximGnOapejaBmnhqVnfVjqvqaysdLTVRNul8pxG3NGorzHWXc0e7RAIVgKyoVgKwhWEIwhWghWAsghGioUCYSMG2ZIApAMkFEBkgMsBlgCBliDu0foqpWeS1YfO9ndxJNUQ2LOmrueUdzY/Ac1V5vatRO7Wcr7X4q3ccXX11VXIiekdH0/DtPRZt/d6z1VrSmgrNzpycL59HZfsNaLk9J3b3oqmPwNZtxc724Kx6010x4JVTM+JcNozUze0lVzJTRhfuQ+idWhKcl9rUdRJr7toxT79W/gb+nj7kS52pxNcwnJaHhLjF/Ts8GbUXKoc25obVXSMejjxOg6kc4NTXD4ZeDy8z0i7Hi0bvD66d6ZyipwabTTTW1NWa7j1y0KqZicTGGtlYlYQoAYCsBGGJWEKwEaKgWCJhIwbhkgCgGSCjYApEBsBlgHpUpSajFNyexIZwyppmqcRGVi0doKMbSq2lL5furt4+h5VV9nTs6OmneveU3FWMG80Y/AxrJXykvhlvXV2HjesxdjE9XpbuzbnZBYvQ1ZLKKn2Ne5z69JcjpGW7TqaJ6zhDVOTdab+ysuLcV7mMaa7P/wAvT+otx4urBcjY62vXaklspxvq/wBT39htWtHjeuc+TXuavO1CyRopZJZI3WmZUwG5sDlxmj6dRdKKfqux7hEzHR5XLNFyMVRlX8foVxu4PLN6r9Ez1pu93NvcPxEzbn4IVnu5ZGEBgKwhWEKArCEYQCiYRg2zJAMkFFEBAKAIHbo3R0qzyygtsvZcWY1VYbFjT1XZ7QtGCwNOkrQjnvk85PtZ5TMy61u1TbjFMOoj1YBlwMcgA2AriQLJALYAgLJhXBic3YxkVPSNJKTlHY5NeeR7Wa8/dlx+Iafln7Snx6uFmw5ZWArAVhCsIVhCsqFAmUYNsyIpkUFEBAKKGjG7stryXaRYjM4XbR2GVOnGG9K7fF7zwmczl3rVuLdEUuixHqywGAAIwAABgKwFbAWUiDRVqBXDXnaMpcE332MRAV43gyUziYl5XqOe3VT3hEm++YBgIwAwhWEKwhZFQoE0jBuGQDIgKAIGFHdoalrVoLcnreGa87GFc7NjS0812PLdcYs8XbFsAOQBQGMAAAAMBWAkgNcpJZkENiMddSluTjFdrdjHKubSGJ6Kgtrs5dm5EmRHVp5GIi5HQicw+VrpmmqYnwKysQAVhCsIVlQjCFAnEYNsUFMiBkFYEFASfJ9/xv6ZexhX0bmh958Fncjydcrq/rqAanLW8X5AbgFYAAAGAKwNc2QceJlk+xklVR0viVBwpp5zqKytlltbft1mA30uleW5ZLi9y8Xd+AC4mGduFvEkjjxlDVSlxNmxVthx+I2YiYuR49XIzYcsrAVhAYQrZUIwhQJxGDbMgooBiAgYiiV5PxvVb4Qb80edzo3tDH4k+ix2/XE8nVc9aD3fkBvwb6K4rJrrA6GwFbAVsAXAy4CuQGipMgi8dXsmYyqj6dq/xaM2n0XUSld2V0smu1LwMBP6PknGPBZ/r9bzIdEaF3d9b7eLfUTArGlOUEauIp0KTTpJtSqbqkrO2r9K47/VaufiREPLXaef6aqqesYn9WxnQfMAwFDErKhWEa5AKETyMG4ZAMgogEAoCwcmaOU58WoruzfqeVyXU0FO01Jqx5t9pxEsgOXAVneostWMkltvdxTd/FeJCXfziKFcwF1gDcDAEmBxYmpYxFb0ji3KTVrGEyqLxVPWVnmuBbcZqh4aqqabNUx/u7Vh+UFDDt0qmvrxS2Q1tZWyazsS5VFucS9dNM6i3FdKK5QcqJ4hOlTTp0n8V3epUXCTWxdS8dxrV3Zq2jo6NrTxTvO8q7hqurVpy4Ti+64tTiqJY6qnntV094ldmdl8MVhCMqFuEBhCMBQJ5GDbMgCgGQUQCgJvQemKNNczUk4SvrJtdBp9a2bN5qXbtFNfLVOHc0FqquzmmM4lYYyjJa0WpJ74tNFiYneHvMTHVyYpFEVoWrFyxW2TVezs9loQjbyIspWCdm2rcFvCNrWxbygWAZAFoDTUeQETjaq1Wt+ZhKoKULswHNi4WS8T0sx9+Gprp/Aq+HzVvlHo91IqrBXnTVmltlDb4r3ZnqbXPGY6w1OF6yLNfJVO1X6SqqxO45vK+qivLa4NLWtbehE7lVOy64eqpQhJfeipeKO1TOYiXwd2jkrqpnwmTNmTxK2VChCtgKwBcplPI820ZBRQDBRAKAj8c7VI9cfR/mcniMfepnyfT8Cn8OuPP6OqliJQV4SlF8Ytp+RoU1zT0nDsVUU1dYy04vT2K2Ks7fhhfxaue9Oouf5PGdNa/wAU7yPhaVVu7lNU6kpPNuTik7+F+86mMY9IcW1c54q8qp+a0Wvt3FegNZtgLIBogZNgcleW0ggsVWu3GK6rmEyrTToPZvf6uTA4NKWu0tkWoeCdz1s+20eIziz8YRs9j7DbcKFFwVC7WRwa5ff246O/SFLonnRO73qjZLaBnehC+5yj3Js7emnNuHw/FaYp1NWPL5O5s2HNABWwFYQrAW5UWBHm2xQUyAZBRQGXA4cfG84dkvY5fEetPxfR8B9m58Pq48Zi9TI5sO/LgoVXUqRh80ku7ebFm3zVRHdr6m79naqr7Q9H5O0spS4u3gdev2nzui918U5cxbZUgBYB0AtZ2AjcTPJmMqjbpbiDY583TlVl2QW9tjoIDHxajG+1tyZnY9pocS9z8Y+qMrztGT4Rb8EbVU4iXEojmriO8qto6B8/W/QbUbG0nV3IlEPSrokeT/2C/FP1O1pfdw+I4x/dT6QkWbLlhcBWwBcBGypktwLCjBtmRFMgCAUAUFcbetVlwilH3fqcTXV813HZ9dwi1yaaKvGqc/RwaVh1GpDptOApatem31rvcWbmjn8WHO4rEzpa8eXzh6JoJPm01su35/kdKv2nJ0fuY+KT1pb4uxi2TKVyjLgbKcd4HFi62diSOCtnkiKGFwibbfwx2tiIHDiqvPzy+zg9WH1S3yMZ3EZphXlK2yKj62PS17bS4hGbE+sITFxvTmt7hJeTNqvemXDszi5TM+Ex81bwDyufP19X6Fa9lox89opha+iY0CrUIdbk/Nnb00Ytw+G4rVzaqryx8ne2e7nA2ArYQrZQjAAFjRg2zIAoimSAZBWAR+Hl0qnHXl6nz+o97V6vt9F/bW/SGjFu54w2mqE71aS+qJtaWPxaWjxCcaav0egcnZ3pOPyy8L5nWudXD0NWbWO0phMwbhZU+ADRhxA04qtZWW0g4Y4SUs5OwwuTrD09mtd9WbCODSFdzaw9Lop/E1ttvMZ32UmooZRXwrVj28QIjSEPt/pVOPffMyte21db7ir/AHxhCT2PsZuPnMqpgVeJ8/X1fotn2YcekqlnqrvLRBdlaMDT1KVOPCEb9tszu26cURD8+1Vz7S9XX3mW1sza5WyhbgBsAAACxmDbFAMiKZMKIBCIfDy6dT8cvU+f1HvavV9zop/81v0guMZ5Npy4POvS/E3/AOLNzSe8hzeJ/wBrX/vjC9cnVPnJSjeyjmr2TbeS9Tq3Oj53QRPPM+GFkhVT2pxfBnk6ppVUgNNSq2sgOfmJvbK3YQNHCL70pPtYGnSFeNKGrBLWlkhI5MJR5uEqkvilsJGylpK0XOXwwvJvi9yIIaun+71ZvbOa9TK37UNbWe4q9EBUeT7Gbj5tVMJO0Gz5+rq/Rbe1MOPC0ucrxjtvK77FmzYsUc1cQ0eIX/srNdfl89lukztRD4OZKAtwoNgAIDYAuBZLmDcMmAUwGuRRAIEHsr1V9V/JHC1cYvVPtOGTnS0en1kuNka8N9p0S74iHUpS8mvc39HH4kOTxarGmqjvj5vROTLWrPjdN9ljoXOrkaDHJPqnmk9pg3iWttzXH/2AHSW4DNRga69WNOOtJ9i4sgjKNCVWWvJWjtz4dRBleXPTUI/BHIdRo0vO+rh4fDG0qnsiT2HJpinq4aEfml6JsucYlhcp5qKo7xKnYupaE3wjJ+RuVbRMvmLcc1dMd5hU4Nql2nCnq/Q6fZdHJujec6j3LVXa9p0NHTvMvmuO3cU02++/5J+TOg+akrYMlbBkLgBsIVsDLlTKyo828ZAFAMiKYAgQOO6GJk/mUZeVvY42upxdz3fW8Gr5tNjtM/uTSDyT4+ZqQ6puTtK9SpPhFR8Xd+h1NFTvMvn+N3Pu0Ud5z+X/AFfeTdNpSnulkl2bWbVyd2loKZiiZ7py73GDeK6svlClWu3klFALXnJdGPSlvbySIOeGDbetUlrPhuQwFxla/wDDhlxfBAKmqNPWSvOeUFvbHQcUaLXR2zl0pPrZBq5Qx+whwu34WJUKBp+fN06kXtk+bXXd5+Vz3vXMWs93D0WmmrWxR/jOfy6fRWcVLopLZY5MPtKtoTeg6erRjxk3J+OXkdfS04tx5vieL3OfUzHbZ2yZsw5ctbkVjkusRchcGWXAFwBrAys6PNumQUyAZEUUAQIfT0LSpT7YP1Xuc7iFG0VO/wADu4qro77uPGyepHsObD6N28nF/Dk+M/JJfmdnRxij4vk+M1ZvxHaP3X/QbToxy2X8bszr6vbST+DSko5dhi2Dc4gjVOu9yYVpcpAasRUcVm7yexcCDMLh7Jzm7LawNaeteq1sVqceEePawDhaerm85PN9QgRel3rPWvscbLvRjUPHuUtd/v8AiYttqNRaqbdo3jF5Lca1zOW9p6aYjMRvLlo61WcYLbJ7tiW9mNuiaqoiF1Oops25rq8FupwUYxitkUku47VNMUxER4Pgrtyblc11dZnIMyeRGEmCNhAuDLLgC4MluVFqPJ0DIKZAMASKKAj9OwvRb+SUZez9TX1VObU+TocMucmpp89kbVjrUk+Bw46vskjoFWor8U/W3sd3S+6h8bxWf/VV8Pkvmh1q0afXG/jmSrrLe08YtU+ju1b7yPYrpvd+QAUmtoBcnxA56NJSbnLYgNdepzktXZTjt+p8CBbSqOy6MFvA11W84QvZfFN5t9SAj9JOMIOCznJxvvz2v2MZHjXK6DWkMRbbKUHZJ7XCKt1mvVvLbt1YozKb0No/mYXlbnJK8n8q+VHRsWeSN+r5TiOtnUXNvZjp+7ubPdzmuTKwmWtyCZI2Viy4VjYATCDdBlstCZ5t4yYMmTIuTJgFBRuBo0gr0qi+hnnejNur0lsaScX7c+cfNDU/gPnvF93CQ0LO9Nr5ZyXjaXudvR1ZtR5PkOMUcupme8RP0+jfor9pmEpVamExUZ0XRqSpxrRi6tKaTsm0ulF9zXXuMqqd23p5zap9FxwPKDAYj7HGYWo/lVWCmu2Ld14GOJeySj1NPskmA+pxQCyp9vgBrlSbVs7dwAWFytZ2AStqRXSnGCW284xXmBC4zlJo2hdVMfhYva489Gc/7YtvyGBUtN/tL0ZTT5rnsTPhCk6UO9ztl2JjklFX0PUWNqT0hOCjKc3GNJNyjT1Uo3bazdl5+HpasxE80uVxLV1RH2NO0ePmmJGy4hGysctM2V5zs1SZXmS4XI6wXLLgyy4MsBlakzydE6CmRFYioZMi5MFCaTTT2NNMTGSJxOYQmCgtS23cfNVdX6HT7MN6rKheT+GVtb6fqNvSaj7OeWekuXxTQTqKOaj2qf18v2eVcp8sdi1/vSfc8/c6s9XN03uqfRxQaeRHuzXUfhk4/hlYDZDSWIj9nisRHqjiKq9GMDfS5Q6QhJf9fjbdWLr+0iYDPlDjZfFjsVLd0sVXl6yJPRYcr0jiJba9WX4q1R+5kjRU1pZyd+tq/mwBq9YGqowi6fs/xSdKtSfxQqKp/TJJesX4nrbnbDh8UoxXTX3j5f8AVomz1cqZa2ysM4apssMKmmQYluBlwMuBlwMAtaZ5OiZMMjJgyZMKZAYgMk8n2EIROjPhv3s+anq/RY2hyYnExm5xvklbaIgeZ8pLLFSs73p0G39XNxT9PM7luc00z5Q+fiMVVx2qn5uNMzVk0mvu94GmVNbrdzAVTayewDbKGq27cbX2swicrMYJG+7IzRsV7Zu4Ga67wEm+4Cw8gq1sRUh89K/9sl/9Hpb6uVxWnNumrtPzXiTPdwJaZSK8plrkyplrZAoVgBAwIwC1pnk6JkAyYU1wpkwopggtR5PsZJ6SyoxzRnuruGxkNWUFLNNru23PnJpl+hRLkweiOjPEObaqTtqPZGMW1e/FtGzXZxYi459GtzrJ0+PD9evyULlXf94WzowUE1vSlJ5+Nu43dPXzUR5Na/b5LtWPHdwL9bz3eRand4IDnlT3vL1JgI5tZbhkGFV3zz8UIHRCt9PhmUPzsHtT772AZzVujZ94GqTCJTkjVccZTt99Tg+zVb9Yoztz95ocRpzp6vLE/q9CnI2XzEy1NlYEbCEZFAKAVlwCBlwi1Jnk3zIKZAMFMgooAgV/Tmj1CX7xCKS/7qXb8dvX/k52ssbc9PxfQ8I1+/2NyfT9v2Lg9JU6cY0Jxlq1JWhOMU4pyeUZb07vzMNNdoqt/Y1/7l7cQ0t2i/8A1Vrw3n4fwqf7SNFxpKjVjBxblKEndOMm05K2d93A9bNqu3mKo2ZV6yzqcTRO/jHZUIbPzNhiEm+PgBpmBrZAaSz7hA6EluZQ6TttuAJLrXegFd1w8Ajq0JV1cTQl/uxX93R9zKjrDW1lPNYrjy/l6TNm2+PmSMIRhSsigwoAYBgGAWs8m8ZMKZAMgpkFFAYAJK+TzTyaexoEThCYvQKvKVFqOttpTbdJvqe2PcaN7RU1b0bS7Wk4xXb+7djmj9f5Vzlbha7wFVV4y/gV6M6UnJTbjK8JK+1rpb+J6WouRTMV748SbmnnUU1WNuaJzHmoUNhm3AkFapgamQS+hMFzlDG1LXdGlTknwWunLyiy0xmJa165y3bcd5n5ORWvwfkw2TZgCTA1yAbCStVpPhUpvwkix1eV6M26o8p+T1CTNx8SVsKRsgVhkAUAMIMAwC1pnm3TIKZAMFFMKZMDLgC4RlwIblhDWwGKXCk5f22l7GNXR76acXafV47E8n0ANgaphWtmIv8A+znCRnhsVrLKrPmn2KGf+Z7W+jjcSrmLtOPCM/r/AAp1Wm4ylTl8UW4v8Sdn5o83YiqKoiY8Sxut7AyTf6sFa2wFg812r1DGrpL1Ns3XwxWyKVsKVhQIoXCsuBgGAWtHm3DFDojMUAwGIAsABAAi+VX+hxf8ip6Eq6PfT+9p9YeNo8X0ASA0yCtbIPTP2cf6OX8+p/jA9qPZcHiPvvhCl6d/1Vf+dV/zZ5z1djT+6o9IcktpHsyewDRIDIbV2r1DCrpL1Jm6+HKwsFZGRWRQYVgAAwAlH//Z",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop"
    ],
    colors: ["White", "Black", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    reviews: 456,
    description: "Timeless white t-shirt made from soft, breathable cotton.",
    material: "100% Cotton",
    care: "Machine wash cold",
    fit: "Regular fit",
    origin: "Portugal"
  },
  {
    id: 3,
    name: "Luxury Leather Handbag",
    category: "accessories",
    price: 399,
    oldPrice: 699,
    discount: 43,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=600&auto=format&fit=crop"
    ],
    colors: ["Black", "Brown", "Tan"],
    sizes: ["One Size"],
    rating: 4.9,
    reviews: 312,
    description: "Elegant Italian leather handbag with gold-tone hardware.",
    material: "Leather",
    care: "Wipe with soft cloth",
    fit: "One Size",
    origin: "Italy"
  },
  {
    id: 4,
    name: "Designer Sneakers",
    category: "shoes",
    price: 189,
    oldPrice: 329,
    discount: 43,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=600&auto=format&fit=crop"
    ],
    colors: ["White", "Black", "Gray"],
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    rating: 4.7,
    reviews: 523,
    description: "Premium minimalist sneakers with premium comfort design.",
    material: "Leather & Canvas",
    care: "Wipe with damp cloth",
    fit: "True to size",
    origin: "Portugal"
  },
  {
    id: 5,
    name: "Silk Dress",
    category: "women",
    price: 279,
    oldPrice: 459,
    discount: 39,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618932260643-eee4a2f6c9d6?q=80&w=600&auto=format&fit=crop"
    ],
    colors: ["Black", "Burgundy", "Navy"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.8,
    reviews: 287,
    description: "Elegant silk dress perfect for special occasions.",
    material: "100% Silk",
    care: "Dry clean only",
    fit: "Fitted",
    origin: "France"
  },
  {
    id: 6,
    name: "Linen Shirt",
    category: "men",
    price: 129,
    oldPrice: 189,
    discount: 32,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=600&auto=format&fit=crop"
    ],
    colors: ["White", "Light Blue", "Khaki"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 198,
    description: "Comfortable linen shirt for warm weather.",
    material: "100% Linen",
    care: "Machine wash warm",
    fit: "Relaxed fit",
    origin: "Portugal"
  },
  {
    id: 7,
    name: "Leather Belt",
    category: "accessories",
    price: 89,
    oldPrice: 149,
    discount: 40,
    image: "data:image/jpeg;base64,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",
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb8ecf7db?q=80&w=600&auto=format&fit=crop"
    ],
    colors: ["Black", "Brown", "Tan"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    rating: 4.5,
    reviews: 156,
    description: "Premium leather belt with elegant buckle.",
    material: "Leather",
    care: "Wipe clean",
    fit: "Adjustable",
    origin: "Spain"
  },
  {
    id: 8,
    name: "Formal Dress Shoes",
    category: "shoes",
    price: 219,
    oldPrice: 379,
    discount: 42,
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=600&auto=format&fit=crop"
    ],
    colors: ["Black", "Brown", "Burgundy"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    rating: 4.7,
    reviews: 289,
    description: "Elegant formal dress shoes with premium comfort.",
    material: "Leather",
    care: "Polish with soft cloth",
    fit: "True to size",
    origin: "Italy"
  },
  {
    id: 9,
    name: "Cashmere Sweater",
    category: "women",
    price: 249,
    oldPrice: 419,
    discount: 41,
    image: "data:image/jpeg;base64,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",
    images: [
      "https://images.unsplash.com/photo-1574164904299-3a102b110380?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=600&auto=format&fit=crop"
    ],
    colors: ["Black", "White", "Gray", "Cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 401,
    description: "Luxury cashmere sweater, incredibly soft and warm.",
    material: "100% Cashmere",
    care: "Hand wash delicate",
    fit: "Regular fit",
    origin: "Scotland"
  },
  {
    id: 10,
    name: "Denim Jeans",
    category: "men",
    price: 129,
    oldPrice: 199,
    discount: 35,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582552938357-32b906df43c3?q=80&w=600&auto=format&fit=crop"
    ],
    colors: ["Dark Blue", "Light Blue", "Black"],
    sizes: ["30", "31", "32", "33", "34", "36"],
    rating: 4.6,
    reviews: 567,
    description: "Classic denim jeans with premium comfort fit.",
    material: "100% Cotton Denim",
    care: "Machine wash cold",
    fit: "Skinny fit",
    origin: "USA"
  }
];

function getProductById(id) {
  return products.find(p => p.id === id);
}

function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}

function getRelatedProducts(productId) {
  const product = getProductById(productId);
  if (!product) return [];
  
  const related = products.filter(p => 
    p.category === product.category && p.id !== productId
  );
  return related.slice(0, 4);
}

function filterProducts(filters) {
  let filtered = products;
  
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(p => p.category === filters.category);
  }
  
  if (filters.minPrice !== undefined) {
    filtered = filtered.filter(p => p.price >= filters.minPrice);
  }
  
  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter(p => p.price <= filters.maxPrice);
  }
  
  if (filters.search) {
    const search = filters.search.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search)
    );
  }
  
  return filtered;
}

function addToCart(productId, quantity = 1, size = '', color = '') {
  const cart = getCart();
  const product = getProductById(productId);
  
  if (!product) return;
  
  const cartItem = cart.find(item => 
    item.id === productId && item.size === size && item.color === color
  );
  
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      size: size || 'N/A',
      color: color || 'N/A'
    });
  }
  
  saveCart(cart);
  updateCartCounter();
}

function removeFromCart(productId, size = '', color = '') {
  const cart = getCart();
  const index = cart.findIndex(item =>
    item.id === productId && item.size === size && item.color === color
  );
  
  if (index > -1) {
    cart.splice(index, 1);
  }
  
  saveCart(cart);
  updateCartCounter();
}

function updateCartQuantity(productId, quantity, size = '', color = '') {
  const cart = getCart();
  const item = cart.find(item =>
    item.id === productId && item.size === size && item.color === color
  );
  
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId, size, color);
    } else {
      item.quantity = quantity;
      saveCart(cart);
    }
  }
  
  updateCartCounter();
}

function getCart() {
  const cart = localStorage.getItem('storeCart');
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem('storeCart', JSON.stringify(cart));
}

function updateCartCounter() {
  const cart = getCart();
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const counter = document.getElementById('cart-count');
  
  if (counter) {
    counter.textContent = totalQuantity;
    counter.style.display = totalQuantity > 0 ? 'flex' : 'none';
  }
}

function clearCart() {
  localStorage.removeItem('storeCart');
  updateCartCounter();
}