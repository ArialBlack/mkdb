<div class="footer-container">
    <header role="banner" class="navbar container navbar-inverse">
        <div class="<?php print $container_class; ?>">
            <div class="navbar-header">
                <?php if ($logo): ?>
                    <a class="logo navbar-btn pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
                        <?php include("/sites/all/themes/mkdb_ui/images/logo.svg"); ?>
                    </a>
                <?php endif; ?>

                <?php if (!empty($primary_nav) || !empty($secondary_nav) || !empty($page['navigation'])): ?>
                <?php endif; ?>
            </div>

            <?php if (!empty($primary_nav) || !empty($secondary_nav) || !empty($page['navigation'])): ?>
                <div class="navbar-collapse collapse">
                    <nav role="navigation">
                        <?php if (!empty($page['navigation'])): ?>
                            <?php print render($page['navigation']); ?>
                        <?php endif; ?>
                        <?php if (!empty($primary_nav)): ?>
                            <?php print render($primary_nav); ?>
                        <?php endif; ?>
                    </nav>
                </div>
            <?php endif; ?>
        </div>
    </header>
</div>