plugin.tx_jpfaq_faq {
    view {
        # cat=plugin.tx_jpfaq_faq/file; type=string; label=Path to template root (FE)
        templateRootPath = EXT:jpfaq/Resources/Private/Templates/
        # cat=plugin.tx_jpfaq_faq/file; type=string; label=Path to template partials (FE)
        partialRootPath = EXT:jpfaq/Resources/Private/Partials/
        # cat=plugin.tx_jpfaq_faq/file; type=string; label=Path to template layouts (FE)
        layoutRootPath = EXT:jpfaq/Resources/Private/Layouts/
    }

    persistence {
        # cat=plugin.tx_jpfaq_faq//a; type=string; label=Default storage PID
        storagePid =
    }
}
