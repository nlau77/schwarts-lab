# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Interest.destroy_all

Interest.create(description: "Grashoff, C., et al., Measuring mechanical tension across vinculin reveals regulation of focal adhesion dynamics. Nature, 2010. 466(7303): p. 263-6.",
                link: "https://doi.org/10.1038/nature09198",
                interest_type: 1)

Interest.create(description: "Kumar, A., et al., Talin tension sensor measurements reveal novel features of focal adhesion force transmission and mechanosensitivity. J. Cell Biol., 2016. 213(3): p. 371–383",
                link: "https://dx.doi.org/10.1083%2Fjcb.201510012",
                interest_type: 1)

Interest.create(description: "Ross, T.D., et al., Integrins in mechanotransduction. Curr. Opin. Cell Biol., 2013. 25(5): p. 613-618.",
                link: "https://doi.org/10.1016/j.ceb.2013.05.006",
                interest_type: 1)

Interest.create(description: "M.A. Schwartz, Integrins and Extracellular Matrix in Mechanotransduction. Cold. Spring Harb. Perspect. Biol., 2010. 2(12): a005066.",
                link: "https://dx.doi.org/10.1101%2Fcshperspect.a005066",
                interest_type: 1)
Interest.create(description: "Parsons J.T., et al., Cell adhesion: integrating cytoskeletal dynamics and cellular tension. Nat. Rev. Mol. Cell. Biol., 2010. 11(9): p. 633-643.",
                link: "https://doi.org/10.1038/nrm2957",
                interest_type: 1)

# interest 2
Interest.create(description: "Conway, D.E., et al., Fluid shear stress on endothelial cells modulates mechanical tension across VE-cadherin and PECAM-1. Curr Biol, 2013. 23(11): p. 1024-30.",
                link: "https://doi.org/10.1016/j.cub.2013.04.049",
                interest_type: 2)
Interest.create(description: "Coon, B.G. et al., Intramembrane binding of VE-cadherin to VEGFR2 and VEGFR3 assembles the endothelial mechanosensory complex. J. Cell Biol, 2015. 208(7): p.975",
                link: "https://doi.org/10.1083/jcb.201408103",
                interest_type: 2)
Interest.create(description: "Baeyens, N., et al., Vascular remodeling is governed by a VEGFR3-dependent fluid shear stress set point. Elife, 2015. 4: e04645.",
                link: "https://doi.org/10.7554/eLife.04645",
                interest_type: 2)
Interest.create(description: "Hahn, C. and M.A. Schwartz, Mechanotransduction in vascular physiology and atherogenesis. Nat. Rev. Mol. Cell. Biol., 2009. 10(1): p. 53-62.",
                link: "https://doi.org/10.1038/nrm2596",
                interest_type: 2)
Interest.create(description: "Baeyens, N. and M.A. Schwartz, Biomechanics of vascular mechanosensation and remodeling. Mol. Biol. Cell., 2016. 27(1): p. 7-11.",
                link: "https://dx.doi.org/10.1091%2Fmbc.E14-11-1522",
                interest_type: 2)
# interest 3
Interest.create(description: "Baeyens, N. et al., Syndecan 4 is required for endothelial alignment in flow and atheroprotective signaling. Proc. Natl. Acad. Sci. USA., 2014. 111(48): p. 17308-17313.",
                link: "https://doi.org/10.1073/pnas.1413725111",
                interest_type: 3)
Interest.create(description: "Yun, S. et al., Interaction between integrin α 5 and PDE4D regulates endothelial inflammatory signalling. Nat. Cell. Biol., 2016. 18(10): p. 1043-1053.",
                link: "https://doi.org/10.1038/ncb3405",
                interest_type: 3)
Interest.create(description: "Baeyens, N. et al., Defective fluid shear stress mechanotransduction mediates hereditary hemorrhagic telangiectasia, J. Cell. Biol., 2016. 214(7): p. 807-816.",
                link: "https://doi.org/10.1083/jcb.201603106",
                interest_type: 3)
Interest.create(description: "Baeyens, N. et al., Endothelial fluid shear stress sensing in vascular health and disease. J. Clin. Invest., 2016. 126(3): p. 821-828.",
                link: "https://doi.org/10.1172/JCI83083",
                interest_type: 3)
